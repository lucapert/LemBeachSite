// utilizziamo i tag Link che ci permettono di navigare all'interno della nostra pagina
// i link sono relativi e dipendono dalla struttura delle folder
// con / si indica sempre la home
// per gli altri si segue la struttura di folder + nome del file
import Link from 'next/link';
import Styles from './Nav.module.scss';
const Nav = () => {
    return (
        <div className={Styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>   
        </div>
    );
};

export default Nav;