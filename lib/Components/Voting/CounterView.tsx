import React, { useEffect, useRef } from 'react'
import { animate } from "framer-motion"

export default function CounterView(props: { to: number }) {
  const ref = useRef(null)

  useEffect(() => {
    const controls = animate(Math.max(0, props.to - 20), props.to, {
      duration: .6,
      delay: .3,
      ease: 'easeOut',
      onUpdate(value) {
        // @ts-ignore
        ref.current.textContent = value.toFixed(1)
      }
    });

    return () => controls.stop()
  }, [props.to])

  return <span ref={ref} />
}