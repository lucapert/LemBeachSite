/* 
Next è un React frontend development web framework creati da vercel
che abilita funzionalità come rendering serverside e generazione di siti 
statici (va generata la folder out/ dove avremo tutti i file statici).

A differenza di React che viene reso solo lato client, Next.js consente
la prima pagina di essere caricata da server, che è buono per SEO e performance.

COn Next abbiamo un routing semplice
API Routes
Typescript e Sass/Scss
static site generation
Facile deployment
*/

/*
la folder public è quella dove vanno i file statici
infatti es. http://localhost:3000/favicon.ico vediamo l'icona
*/
/*
  il routing è molto semplice ed è dato dalla struttura delle folder e file esclusa estensione 
  sotto la cartella pages/
*/
/*
convezione lower case per le pagine e uppercase per gli altri compenti
*/
// import Head from 'next/head'; // utilizzato se si vuole un titolo custom 
// meta tags ecc...
import Styles from '../styles/Layout.module.scss';
import Test from '../src/components/index/text/Text';
import ArticleList from '../src/components/index/text/ArticleList/ArticleList';
import { server } from '../config/index'
export default function Home({ articles }) {
  console.log(articles);
  // questa è la pagina dove abbiamo l'intero documento renderizzato
  // viene eseguita solamente lato server
  // ottimo per il SEO in quanto quelle lato client non ne vediamo il codice sorgente
  // invece essendo eseguita lato server abbiamo tutto il contenuto DOM renderizzato
  // console.log('I Am document page');
  // forma l'intera struttura della pagina
  // compreso script ecc..
  // ma non esegue nessun js code presente nella pagina
  // quindi component didmount/useeffect ecc.. non vengono eseguiti
  return (
      <div className={Styles.container}>
        <div>
          {/* <Head>
            <title>WebDev Newz</title>
            <meta name='keywords' content='web, development, programming'/>
          </Head> */}
          { /*passiamo le props top down */}
          <ArticleList articles={ articles }/>
        </div>
      </div>
  )
}

// facciamo la rquest alla api che abbiamo creato
export const getStaticProps = async () => {
  const res = await fetch('${server}/api/articles');
  const articles = await res.json();
  // ritorniamo come props gli article che abbiamo ottenuto
  return {
    props: {
      articles
    }
  }
}

// questa funzione, è uno dei tre metodi che ci permettono di fare il fetch dei dati e di passarli
// come props
// utilizziamo async e await al suo interno
// ci permette di ottenere i dati a tempo di build
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();
//   // ritorniamo come props gli article che abbiamo ottenuto
//   return {
//     props: {
//       articles
//     }
//   }
// }