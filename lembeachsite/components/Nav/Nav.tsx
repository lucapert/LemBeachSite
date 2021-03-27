import Link from 'next/link';
import Styles from './Nav.module.scss';
const Nav = () => {
    const showChilds = (target) => {
        
    }
    return (
        <nav className={Styles.nav}>
            <div className="row outerContainer">
                <div className="col span-1-of-3">
                    
                </div>
                <div className={Styles.outerNavLink+" col span-2-of-3"}>
                    <ul className={Styles.navLink}>
                        <li>
                            <Link href="">Home</Link>
                        </li>
                        <li onClick={() => showChilds("test")}>
                            I corsi
                        </li>
                        <li>
                            Chi siamo
                        </li>
                    </ul> 
                </div>            
            </div>  
        </nav>
    );
};

export default Nav;