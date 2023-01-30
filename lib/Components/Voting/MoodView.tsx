import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { moodIcon } from './Animations'
import Mood1 from '../../../public/images/mood-1.webp'
import Mood2 from '../../../public/images/mood-2.webp'

const moods = [Mood1, Mood2]

export default function MoodView(props: { size: number }) {
  const [mood, setMood] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      const nextMood = mood === moods.length - 1 ? 0 : mood + 1

      var img = new Image()
      img.onload = () => setMood(nextMood)
      img.src = moods[nextMood].src
    }, 5500)

    return () => clearInterval(interval)
  }, [mood])

  return (
    <motion.span key={moods[mood].src} variants={moodIcon} style={{ width: `${props.size}rem`, height: `${props.size}rem` }}>
      <img src={moods[mood].src} className='object-contain object-center w-full h-full' />
    </motion.span>
  )
}