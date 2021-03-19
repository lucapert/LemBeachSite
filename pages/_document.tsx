// questo file serve per andare a customizzare quella parte di 
// pagina html come il tag html ecc..

// questa viene renderizzata lato server
// alla modifica potrebbe essere necessario riavviare il server

// solitamente non andiamo a modificare questo ma utilizziamo il file
// index.js ecc..
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />{/* qui vengono renderizzati gli script */}
        </body>
      </Html>
    )
  }
}

export default MyDocument