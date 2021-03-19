import styles from '../../../../../styles/Layout.module.scss';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
// questo layout sarà condiviso dalle varie pagine
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Nav />
            <main className={ styles.main }>
                <Header/>
                { children }
            </main>
        </div>
    );
};

export default Layout;