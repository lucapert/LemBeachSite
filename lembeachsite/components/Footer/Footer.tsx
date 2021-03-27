import React from 'react';
import Style from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={Style.footerContainer}>
            <div className={"outerContainer"}>
                <span className={Style.copyRight}>
                <span className="material-icons-outlined">
                    copyright
                </span> l'uomo e il mare { new Date().getFullYear() }
                </span>
            </div>
        </div>
    );
};

export default Footer;