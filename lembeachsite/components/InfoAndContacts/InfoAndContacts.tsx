import React from 'react';
import Styles from './InfoAndContacts.module.scss';
const InfoAndContacts = () => {
    return (
        <div className="gridRow">
            <img src="/vendors/images/GMapsLEM.png" className={"gridCol gridSpan-1-of-2"} />
            <div className="gridCol gridSpan-1-of-2">
                <h2 className="templateEdit">
                    INFO &amp; CONTATTI
                </h2>
                <hr />
                <p className="templateEdit" style={{ color: "White" } }>
                    Sede:<br /><br />
                    <strong>Luomo e il mare a.s.d<br />
                    </strong><br />
                    Bagni Numero 70<br />
                    Str. delle Marche, 61122 Pesaro PU<br />
                    Tel. +39 3478501375<br />
                    E-mail <a href="mailto:info@lem@gmail.it" style={{color: "#fff"}}>info@surfsegnana.it</a><br />
                    Facebook <a href="https://www.facebook.com/luomo.eilmare.3" target="_blank" style={{color: "#fff"}}>LEM</a>
                </p>
                <br />							
                <h2 className="templateEdit">
                    ORARI
                </h2>
                <hr />
                <p className="templateEdit" style={{ color:"White" }}>
                    Dal 31 Maggio { new Date().getFullYear() } al 20 Ottobre - Ogni giorno dalle 08:30 alle 18:30
                </p>
            </div>
        </div>
    );
};

export default InfoAndContacts;