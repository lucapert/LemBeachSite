// se non inseriamo questa struttura avremo un 404
// nel momento in cui non viene trovato un articolo
// in questo modo siamo in grado di andare a settare una 
// pagina al posto del 404
import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../src/components/index/text/Meta/Meta' 
const article = ({ article }) => {
    // posssiamo in questo modo utilizzare data fetching
    // tramite useEffect..
    // const router = useRouter();
    // const {id} = router.query;
    return (
        // <div>this is an article { id }</div>
        // <div>this is an article { article.id }</div>
        
        <>
        {/*passiamo le props custom per i meta di questa pagina*/}
        <Meta title={article.title} description={article.exceptr}/>
        <h1>{article.title}</h1>
        <p>{ article.body }</p>
        <Link href='/'> Go back </Link>
        </>
    );
};

// questa è la seconda delle api che ci permette
// di generare i path dinamicamente
// export const getServerSideProps = async (context) => {

//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/${context.params.id}');
//         const article = await res.json();

//         return {
//             props:{
//                 article
//             }
//         }
// }

// utilizziamo la combinazione delle due api viste precedentemente
// con questo li ritoniamo tutti
// generiamo tutti i paths per tutti gli articoli
// in questo modo possiamo esplorare tutti gli articoli
// in un sito statico
// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const articles = await res.json();
//     const ids = articles.map(article => {
//         article.id
//     });

//     const paths = ids.map(id => {
//         {{params:{id: id.toString()}}}
//     })
//     // ritorniamo tutti gli articoli
//     return {
//         // paths: { params: {id: '1', id: '2'}} 
//         paths,
//         // return a 404 page 
//         fallback: false
//     }
// }


// prendiamo dalla nostra api
// export const getServerSideProps = async (context) => {

//         const res = await fetch('${server}/api/articles/${context.params.id}');
//         const article = await res.json();

//         return {
//             props:{
//                 article
//             }
//         }
// }

export const getStaticPaths = async () => {
    const res = await fetch('${server}/api/articles');
    const articles = await res.json();
    const ids = articles.map(article => {
        article.id
    });

    const paths = ids.map(id => {
        {{params:{id: id.toString()}}}
    })
    // ritorniamo tutti gli articoli
    return {
        // paths: { params: {id: '1', id: '2'}} 
        paths,
        // return a 404 page 
        fallback: false
    }
}

// prendiamo tramite api statica

export default article;