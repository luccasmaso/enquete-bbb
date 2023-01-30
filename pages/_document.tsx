import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Enquete BBB</title>
        <meta name='title' content='Enquete BBB 23' />
        <meta name='description' content='Quem deve ser eliminado? Dê uma espiadinha nos resultados parciais das votações que estão ocorrendo no Big Brother Brasil edição 2023. Enquete BBB. Enquete BBB23. Gshow BBB' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.enquetebbb.app' />
        <meta property='og:title' content='Enquete BBB 23' />
        <meta property='og:description' content='Quem deve ser eliminado? Dê uma espiadinha nos resultados parciais das votações que estão ocorrendo no Big Brother Brasil edição 2023. Enquete BBB. Enquete BBB23. Gshow BBB' />
        <meta property='og:image' content='/images/preview.png' />

        <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3732251958237761' crossOrigin='anonymous' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}