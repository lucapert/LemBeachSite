import Link from 'next/link';
import Styles from './Nav.module.scss';
import { server } from '../../config/config';
import { useRouter } from 'next/router'
const Nav = () => {
    const router = useRouter()
    const showChilds = (target) => {
        
    }
    return (
        <nav className={Styles.nav}>
            <div className="row outerContainer">
                <div className="col span-1-of-3">
                    
                </div>
                <div className={Styles.outerNavLink+" col span-2-of-3"}>
                    <ul className={Styles.navLink}>
                        <li className = { router.pathname === '/' ? Styles.fixedLink : Styles.normal } >
                            <Link href="">Home</Link>
                        </li>
                        <li className={Styles.dropDown + " " + Styles.normal} onClick={() => showChilds("test")}>
                            <Link href="">I corsi</Link><span className={Styles.iconChevron+" ion-chevron-down"}></span>
                        </li>
                        <li className={Styles.normal}>
                            <Link href="">Chi siamo</Link>
                        </li>
                    </ul> 
                </div>            
            </div>  
        </nav>
    );
};

export default Nav;