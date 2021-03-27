import Styles from './Header.module.scss';
import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <div>
            <div className={Styles.mainHeader}>
                <div className="outerContainer">
                    <div className={Styles.mainHeader_inner}>
                        <div className={Styles.contacts}>
                            <div className={Styles.contactsEmail}>
                                <span className={Styles.infoIcon+" material-icons-outlined"}>
                                    markunread
                                </span> info@lem@gmail.com
                            </div>
                            <div>
                                <span className={Styles.telephoneIco + " ion-ios-telephone"}></span>
                                0721-111111
                            </div>
                        </div>
                        <div className={Styles.socials}>
                            Resta aggiornato, seguici sui nostri social:&nbsp;&nbsp;
                            <a href="https://www.facebook.it" className={Styles.social}>
                                <span className="material-icons-outlined">
                                    facebook
                                </span>
                            </a>
                            <a href="https://www.twitter.it" className={Styles.social}>
                                <span className={Styles.twitter+" ion-social-twitter-outline"}></span>
                            </a>
                            <a href="https://www.instagram.it" className={Styles.social}>
                                <span className={Styles.instagram+" ion-social-instagram-outline"}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    )
}
export default Header