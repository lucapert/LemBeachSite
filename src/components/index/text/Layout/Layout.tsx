import styles from '../../../../../styles/Layout.module.scss';
import Nav from '../Nav/Nav';
import Meta from '../Meta/Meta';
import Header from '../Header/Header';
// questo layout sarà condiviso dalle varie pagine
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {/*in questo modo ogni pagina avrà il layout
                con le props di default
            */}
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