import React from 'react'
import { motion } from 'framer-motion'
import { total } from './Animations'
import { getParticipantImage } from '../../Helpers/ParticipantImage'
import { Result } from './Types'
import ProgressCircle from './ProgressCircle'
import { formatNumber } from '../../Helpers/NumberFormat'
import CounterView from './CounterView'

export default function VotingCardView(props: { result: Result }) {
  const active = props.result.status === 'active'

  const textColor = active ? 'text-purple-50' : ''
  const background = active ? 'bg-gradient-to-b from-purple-500 to-purple-600' : 'bg-neutral-100'
  const progressColor = active ? 'text-purple-200' : 'opacity-0'
  const padding = active ? 'pt-7 pb-5' : 'py-7'

  const progressBg = (index: number) => active ? (index > 0 ? 'bg-white/10' : 'bg-rose-600') : ''
  const imageFilter = (index: number) => index > 0 ? 'grayscale' : active ? '' : 'grayscale'
  const itemOpacity = (index: number) => index > 0 ? (active ? 'opacity-80' : 'opacity-50') : 'opacity-100'
  const nameSize = (value: string) => value.includes(" e ") ? 'leading-5' : 'text-xl leading-6'
  
  const participants = props.result.participants.sort((a, b) => b.votesPercentage - a.votesPercentage)

  return (
    <div className={`${textColor} ${padding} relative pt-7 px-4`}>
      <div className={`absolute inset-0 ${background}`} style={{ borderRadius: '3rem' }}/>
      <div className='relative flex flex-col gap-2'>
        {participants.map((participant, index) => (
          <div className={`flex items-center justify-between gap-2 ${itemOpacity(index)}`} key={participant.name}>
            <div className='relative w-10 h-10 flex items-center justify-center rounded-full shrink-0'>
              <div className={`w-8 h-8 rounded-full overflow-hidden ${progressBg(index)}`}>
                <img className={`w-full h-full object-cover ${imageFilter(index)}`} src={getParticipantImage(participant.name)} />
              </div>
              <div className={`absolute inset-0 z-10 ${progressColor}`}>
                <ProgressCircle size={2.5} percentage={participant.votesPercentage} />
              </div>
            </div>
            <div className={`${nameSize(participant.name)} font-semibold line-clamp-2`}>
              {participant.name}
            </div>
            <div className='text-3xl font-black tracking-tighter shrink-0 ml-auto'>
              <CounterView to={participant.votesPercentage} /> %
            </div>
          </div>
        ))}
      </div>
      
      <motion.div variants={total} className='relative text-center'>
        {active && (
          <div className='text-xs tracking-tight opacity-80 pt-3'>
            Resultado parcial de {formatNumber(props.result.totalVotes)} votos.
          </div>
        )}
      </motion.div>
    </div>
  )
}