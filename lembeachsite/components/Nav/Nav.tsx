import Link from 'next/link';
import Styles from './Nav.module.scss';
import { server } from '../../config/config';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';
import { route } from 'next/dist/next-server/server/router';
const Nav = () => {
    const [showMobileMenu, setMobileMenu] = useState(false); 
    const [showSubMenu, setSubMenu] = useState(false);
    const router = useRouter();
    const showChilds = (target) => {
        
    }
    const goTo = (path:string) => {
        router.push(path);
    }
    const showDropDown = () => {

    }

    const mobileMenuOnClick = (event) => {
        const el = (event.target as HTMLElement);
        if(el.classList.contains("ion-navicon-round"))
        {
            el.classList.remove("ion-navicon-round");
            el.classList.add("ion-close-round");
            setMobileMenu(true);
        }
        else if(el.classList.contains("ion-close-round"))
        {
            el.classList.remove("ion-close-round");
            el.classList.add("ion-navicon-round");
            setMobileMenu(false);
        }
    }

    const subMenuOnClick = (event)  => {
        const el = (event.target as HTMLElement);
        if(el.classList.contains("ion-chevron-down"))
        {
            el.classList.remove("ion-chevron-down");
            el.classList.add("ion-chevron-up");
            setSubMenu(!showSubMenu);
        }
        else if(el.classList.contains("ion-chevron-up"))
        {
            el.classList.remove("ion-chevron-up");
            el.classList.add("ion-chevron-down");
            setSubMenu(!showSubMenu);
        }
        if(el.classList.contains(Styles.subMenuDropDownTitle))
        {
            var targetElement = el.nextElementSibling;
            if(targetElement.classList.contains("ion-chevron-down"))
            {
                targetElement.classList.remove("ion-chevron-down");
                targetElement.classList.add("ion-chevron-up");
                setSubMenu(!showSubMenu);
            }
            else if(targetElement.classList.contains("ion-chevron-up"))
            {
                targetElement.classList.remove("ion-chevron-up");
                targetElement.classList.add("ion-chevron-down");
                setSubMenu(!showSubMenu);
            }
        }
    }

    return (
        <nav id="nav-bar" className={Styles.nav}>
            <div className={Styles.innerNav + " outerContainer"}>
                <div className={ Styles.logo }>
                    
                </div>
                <div className={Styles.outerNavLink}>
                    {
                        <>
                            <div className={ Styles.showOnMaxWidth }>
                                <ul className={Styles.navLink}>
                                    <li onClick={() => goTo('#')}>
                                        <div className = { [router.pathname === '/' ? Styles.fixedLink : Styles.normal].join(" ") }>Home</div>
                                    </li>
                                    <li className="has-dropdown">
                                        <div className={Styles.dropDown + " " + Styles.normal}>I corsi<span className={Styles.iconChevron+" ion-chevron-down"}></span></div>
                                        <ul className="dropdown-menu">
                                            <li><Link href="/it/33/viaggi-aziendali-sul-lago-di-garda">Corso base</Link></li>                                               
                                            <li><Link href="/it/136/teambuilding-lago-di-garda-surf-segnana">Corso intermedio</Link></li>                                               
                                            <li><Link href="/it/34/lago-di-garda-gite-scolastiche-sportive">Corso intermedio</Link></li>                                               
                                        </ul>
                                    </li>
                                    <li onClick={() => goTo('')}>
                                        <div className={Styles.normal}>Chi siamo</div>
                                    </li>
                                    <li className="has-dropdown">
                                        <div className={Styles.dropDown + " " + Styles.normal}>I corsi<span className={Styles.iconChevron+" ion-chevron-down"}></span></div>
                                        <ul className="dropdown-menu">
                                            <li><Link href="/it/33/viaggi-aziendali-sul-lago-di-garda">Corso base</Link></li>                                               
                                            <li><Link href="/it/136/teambuilding-lago-di-garda-surf-segnana">Corso intermedio</Link></li>                                               
                                            <li><Link href="/it/34/lago-di-garda-gite-scolastiche-sportive">Corso intermedio</Link></li>                                                  
                                        </ul>
                                    </li>
                                </ul> 
                            </div>
                            <div className={ Styles.showOnMinWidth } onClick = { (event) => {mobileMenuOnClick(event)} } >
                                <i className="ion-navicon-round"></i>
                            </div>
                        </>
                    }
                </div>
                {
                        <div className={Styles.menuMobile}>
                            <div className={ [Styles.hideMobileMenu, showMobileMenu ? Styles.showMobileMenu:""].join(" ")  }>
                                <div onClick={() => goTo('#')}>
                                    <div className = { [router.pathname === '/' ? Styles.fixedMobileLink : Styles.normal].join(" ") }>Home</div>
                                </div>
                                <hr />
                                <div onClick={() => goTo('#')}>
                                    <div className = { [router.pathname === '/test' ? Styles.fixedMobileLink : Styles.normal].join(" ") }>Corso base</div>
                                </div>
                                <hr />
                                <div onClick={() => goTo('#')}>
                                    <div className = { [router.pathname === '/test' ? Styles.fixedMobileLink : Styles.normal].join(" ") }>Corso intermedio</div>
                                </div>
                                <hr />
                                <div onClick={() => goTo('#')}>
                                    <div className = { [router.pathname === '/test' ? Styles.fixedMobileLink : Styles.normal].join(" ") }>Corso esperto</div>
                                </div>
                                <hr />
                                <div>
                                    <div className={ Styles.normal } onClick={ (e) => { subMenuOnClick(e) } }><span className={ Styles.subMenuDropDownTitle }>I Corsi</span><span className={Styles.iconChevron+" ion-chevron-down"}></span></div>
                                    {
                                        <div className={ [Styles.subMenu, showSubMenu ? Styles.showMobileSubMenu : ""].join(" ") }>
                                            <div>Test</div>
                                            <div>Test</div>  
                                        </div>
                                    }
                                </div>
                                <hr />
                                <div onClick={() => goTo('#')}>
                                    <div className = { [router.pathname === '/test' ? Styles.fixedMobileLink : Styles.normal].join(" ") }>Corso esperto</div>
                                </div>
                                <hr />
                            </div>
                        </div>
                }    
            </div>  
        </nav>
    );
};

export default Nav;