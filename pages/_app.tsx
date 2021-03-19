import '../../LemBeachSite/styles/global.scss';
// questo è un file speciale
// se inserito è responsabile del rendering di tutte le nostre pagine come componenti
// le props sono passate ai componenti internamente da Next.js

// importiamo il Layout che fa da wrapper ai nostri componenti

import Layout from '../src/components/index/text/Layout/Layout';

export default function App({ Component, pageProps })
{
    // eseguito sia lato server che lato client
    // page compnent
    // possiamo metterci attorno ul layout che sarà condiviso da tutte le nostre
    // pagine 
    // header, footer, navigation ecc...
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>

    )
}