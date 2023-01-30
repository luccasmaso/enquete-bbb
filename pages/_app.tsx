import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { Be_Vietnam_Pro } from '@next/font/google'

const sans = Be_Vietnam_Pro({ variable: '--font-sans', weight: ['400', '500', '600', '700'], preload: true, display: 'swap', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex flex-col max-w-screen-sm m-auto min-h-screen px-3 md:px-0 ${sans.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}