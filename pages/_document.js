import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class Doc extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, chunks} = renderPage()
    const styles = flush()
    return { html, head, chunks}
  }

  render () {
    return (
      <html>
        <Head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, minimum-scale=1.0' />
          <meta name='author' content='Cam & Sound' />
          <script src='https://use.typekit.net/qdw7srw.js'></script>
          <script dangerouslySetInnerHTML={{__html: `{try{Typekit.load({ async: true });}catch(e){}}`}}></script>
          <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Cam & Sound - A daydream at night...' />
          <meta property='og:description' content='From the suburbs of New York and London, Cam & Sound was born. A unique blend of hip hop, mixing genres and influences from all over. Sit back and enjoy the daydream at night...' />
          <meta property='og:url' content='https://camandsound.com/' />
          <meta property='og:site_name' content='Sperry' />
          <meta property='og:image' content='https://camandsound.com/img-share-large.jpg' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:description' content='From the suburbs of New York and London, Cam & Sound was born. A unique blend of hip hop, mixing genres and influences from all over. Sit back and enjoy the daydream at night...' />
          <meta name='twitter:title' content='Cam & Sound - A daydream at night...' />
          <meta name='twitter:site' content='@camandsound' />
          <meta name='twitter:image' content='https://camandsound.com/img-share-small.jpg' />
          <meta name='twitter:creator' content='@camandsound' />
          <style>{`
            * {
              margin: 0;
              box-sizing: border-box;
            }

            body,
            html {
              font-size: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }

            body {
              font-family: ${'proxima-nova'};
              font-weight: 300;
            }

            h1, h2, h3, h4, h5, h6 {
              font-weight: 800;
              text-transform: uppercase;
            }

            p {
              line-height: 1.8;
            }

            .container {
              background: url(/static/img/bg-cam-sound.jpg) no-repeat center #170816;
              background-size: cover;
              height: 100%;
              overflow: auto;
            }

            .hide {
              opacity: 0;
            }
          `}
          </style>
        </Head>
        <body>
          <div className='container'>
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    )
  }
}
