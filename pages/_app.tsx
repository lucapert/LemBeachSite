import './global.scss';
// questo è un file speciale
// se inserito è responsabile del rendering di tutte 
// le nostre pagine
// le props sono passate ai componenti internamente da Next.js

export default function App({ Component, pageProps })
{
    console.log('I am app component');
    return <Component {...pageProps}></Component>
}