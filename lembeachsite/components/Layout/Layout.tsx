import styles from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import Head from 'next/head';
import Row from '../../components/Row/Row';
import TextRow from '../../components/TextRow/TextRow';
import InfoAndContacts from '../../components/InfoAndContacts/InfoAndContacts';
import InfoAndContactsStyles from '../../components/InfoAndContacts/InfoAndContacts.module.scss';
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Meta />
            <Header />
            <Nav />
            <main className={ styles.main }>
                { children }
                <Row styles="" backGroudColor="#007FFF" children={ <TextRow titleColor="#ffffff" title={ "resta in contatto con noi".toUpperCase() } article="" /> } />
                <Row styles={ InfoAndContactsStyles.infoAndContactsContainer } backGroudColor="#1AA2B0" children={ <InfoAndContacts /> } />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;