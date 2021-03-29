import Link from 'next/link';
import Styles from './Nav.module.scss';
import { server } from '../../config/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Nav = () => {
    const router = useRouter()
    const showChilds = (target) => {
        
    }
    useEffect(() => {
        // When the user scrolls the page, execute myFunction
        window.document.body.onscroll = function() {myFunction()};

        // Get the header
        var header = window.document.getElementById("nav-bar");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        }
    }, []);
    return (
        <nav id="nav-bar" className={Styles.nav}>
            <div className="gridRow outerContainer">
                <div className="gridCol gridSpan-1-of-3">
                    
                </div>
                <div className={Styles.outerNavLink+" gridCol gridSpan-2-of-3"}>
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