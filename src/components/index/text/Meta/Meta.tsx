import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            {/* passiamo i props title, keywords, description dinamicamente */}
            <meta name='vieport' content='width=device-width,
            initial-scale=1'></meta>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            {/* è l'icona che noi troviamo nel tab del browser */}
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}

export default Meta;