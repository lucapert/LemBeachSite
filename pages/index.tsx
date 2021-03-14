import Head from 'next/head';
import Styles from '../pages/index.module.scss';
import Test from '../src/components/index/text/Text';
export default function Home() {
  // questa è la pagina dove abbiamo l'intero documento renderizzato
  // viene eseguita solamente lato server
  // console.log('I Am document page');
  return (
    <div className={Styles.container}>
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content="A page's description, usually one or two sentences"></meta>
      </Head>

      <main>
        <h1 className={Styles.title}>
          to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Test></Test>

        <p className={Styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={Styles.grid}>
          <a href="https://nextjs.org/docs" className={Styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={Styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={Styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={Styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/vercel.svg" alt="Vercel Logo" className={Styles.logo} />
        </a>
      </footer>
    </div>
  )
}
