import './global.scss';
// questo è un file speciale
// assieme a _document.tsx
// sono nascosti finchè non li andiamo a sovrascrivere/richiamare
// se inserito è responsabile del rendering di tutte 
// le nostre pagine
// le props sono passate ai componenti internamente da Next.js

export default function App({ Component, pageProps })
{
    // eseguito sia lato server che lato client
    // console.log('I am app component');
    return <Component {...pageProps}></Component>
}