import React from 'react'
import { motion } from 'framer-motion'
import { cards, card, header, text, footer } from './Animations'
import { Result } from './Types'
import VotingCardView from './VotingCardView'
import MoodView from './MoodView'

export default function VotingView(props: { results: Result[] }) {
  return (
    <>
      <div className='relative space-y-5'>
        <div className='mt-6 mb-10 text-center'>
          <motion.div variants={header} initial='hidden' animate='visible' className='flex items-center justify-center gap-2'>
            <div className='flex items-center gap-1'>
              <img className='w-5 h-5 object-cover rounded-full grayscale' src='/images/robo-1.png' />
              <img className='w-8 h-8 object-cover rounded-full grayscale' src='/images/robo-2.png' />
            </div>

            <div className='w-10 h-10 rounded-full'>
              <img className='w-full h-full object-cover' src='/images/globo.svg' />
            </div>

            <div className='flex items-center gap-1'>
              <img className='w-8 h-8 object-cover rounded-full grayscale' src='/images/robo-3.png' />
              <img className='w-5 h-5 object-cover rounded-full grayscale' src='/images/robo-4.png' />
            </div>
          </motion.div>

          <motion.div 
            variants={text} 
            initial='hidden' 
            animate='visible' 
            className='text-2xl mt-3 flex items-center justify-center gap-2'
          >
            <span className='font-bold tracking-tighter'>Big Brother Brasil</span> 
            <span className='font-medium tracking-tighter'>23</span>
          </motion.div>
        </div>
      </div>

      <motion.div 
        variants={text} 
        initial='hidden' 
        animate='visible' 
        className='relative flex items-center justify-center mb-3 gap-1 text-purple-500'
      >
        <MoodView size={2.25} />
        <div className='text-lg font-semibold'>Quem deve ser eliminado:</div>
      </motion.div>

      <motion.div variants={cards} initial='hidden' animate='visible' className='space-y-5'>
        {props.results.map(result => (
          <motion.div variants={card} key={result.id} className='relative'>
            <VotingCardView result={result} />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        variants={footer} 
        initial='hidden' 
        animate='visible' 
        className='text-center text-neutral-400 text-xs mt-16 mb-10 leading-4'
      >
        <span className='font-semibold'>Olá, bem-vindo</span>. Dê uma espiadinha nos resultados parciais 
        das votações que estão ocorrendo no Big Brother Brasil edição 2023.
      </motion.div>
    </>
  )
}