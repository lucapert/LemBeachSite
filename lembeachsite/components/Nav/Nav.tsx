import Link from 'next/link';
import Styles from './Nav.module.scss';
const Nav = () => {
    return (
        <nav className={Styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>   
        </nav>
    );
};

export default Nav;