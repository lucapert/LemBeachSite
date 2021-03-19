{/* <Head> */}
    {/*definiamo un  titolo custom */}
    // <title>About</title>
// </Head>
// import Head from 'next/head';
import Meta from '../../LemBeachSite/src/components/index/text/Meta/Meta';
const about = () => {
    return (
        <div>
            {/*passiamo le props custom per i meta di questa pagina*/}
            <Meta title='About' />
            <h1>About</h1>
        </div>
    );
};

export default about;