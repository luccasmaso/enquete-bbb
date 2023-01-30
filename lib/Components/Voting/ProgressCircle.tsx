import React, { useEffect, useState } from 'react'

export default function ProgressCircle(props: { size: number, percentage: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => setValue(props.percentage), [props.percentage])

  return (
    <svg width={`${props.size}rem`} height={`${props.size}rem`} viewBox='0 0 100 100'>
      <circle 
        cx='50' 
        cy='50' 
        r='46' 
        strokeWidth='8'
        stroke='currentColor' 
        fill='none' 
        transform='rotate(-90 50 50)'
        strokeDasharray={`${value} 100`}
        strokeLinecap='round'
        pathLength='100'
        style={{ transition: 'stroke-dasharray 1.2s ease-in-out' }}
      />
    </svg>
  )
}