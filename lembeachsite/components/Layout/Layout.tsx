import styles from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import Head from 'next/head';
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Meta />
            <Header />
            <main className={ styles.main }>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;