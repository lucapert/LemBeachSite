import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='vieport' content='width=device-width,
            initial-scale=1'></meta>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="/vendors/css/ionicons.min.css" />
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