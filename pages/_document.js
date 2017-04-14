import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class Doc extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
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
          <style>{`
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
