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