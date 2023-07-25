import { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
	   <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YHB4RGD380');
        `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
