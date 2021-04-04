import Link from 'next/link';
import Styles from './Nav.module.scss';
import { server } from '../../config/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { route } from 'next/dist/next-server/server/router';
const Nav = () => {
    const router = useRouter()
    const showChilds = (target) => {
        
    }
    const goTo = (path:string) => {
        router.push(path);
    }
    const showDropDown = () => {

    }
    return (
        // <nav id="nav-bar" className={Styles.nav}>
        //     <div className="gridRow outerContainer">
        //         <div className="gridCol gridSpan-1-of-3">
                    
        //         </div>
        //         <div className={Styles.outerNavLink+" gridCol gridSpan-2-of-3"}>
        //             <ul className={Styles.navLink}>
        //                 <li className = { router.pathname === '/' ? Styles.fixedLink : Styles.normal } >
        //                     <Link href="">Home</Link>
        //                 </li>
        //                 <li className={Styles.dropDown + " " + Styles.normal} onClick={() => showChilds("test")}>
        //                     <Link href="">I corsi</Link><span className={Styles.iconChevron+" ion-chevron-down"}></span>
        //                 </li>
        //                 <li className={Styles.normal}>
        //                     <Link href="">Chi siamo</Link>
        //                 </li>
        //             </ul> 
        //         </div>            
        //     </div>  
        // </nav>
        <nav id="nav-bar" className={Styles.nav}>
            <div className={Styles.innerNav + " outerContainer"+" gridRow"}>
                <div className={"gridCol gridSpan-1-of-4" }>
                    
                </div>
                <div className={Styles.outerNavLink + " gridCol gridSpan-3-of-4"}>
                    <ul className={Styles.navLink}>
                        <li onClick={() => goTo('#')}>
                            <div className = { [router.pathname === '/' ? Styles.fixedLink : Styles.normal].join(" ") }>Home</div>
                        </li>
                        <li className="has-dropdown">
                            <div className={Styles.dropDown + " " + Styles.normal}>I corsi<span className={Styles.iconChevron+" ion-chevron-down"}></span></div>
                            <ul className="dropdown-menu">
                                <li><Link href="/it/33/viaggi-aziendali-sul-lago-di-garda">Viaggi aziendali</Link></li>                                               
                                <li><Link href="/it/136/teambuilding-lago-di-garda-surf-segnana">Incentive e Teambuilding</Link></li>                                               
                                <li><Link href="/it/34/lago-di-garda-gite-scolastiche-sportive">Gite scolastiche</Link></li>                                               
                            </ul>
                        </li>
                        <li onClick={() => goTo('')}>
                            <div className={Styles.normal}>Chi siamo</div>
                        </li>
                    </ul> 
                </div>    
            </div>  
        </nav>
    );
};

export default Nav;