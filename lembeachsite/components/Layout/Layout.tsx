import styles from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Meta from '../Meta/Meta';
import Header from '../Header/Header';
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Meta />
            <Nav />
            <main className={ styles.main }>
                <Header/>
                { children }
            </main>
        </div>
    );
};

export default Layout;