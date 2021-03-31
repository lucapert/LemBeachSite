import React from 'react';
import Styles from './News.module.scss';
import Event from './Event';
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const News = () => {
    return (
        <div className={ Styles.newsContainer + " gridRow" }>
            <Event Text={ text } Date={ new Date().toDateString() } EventAlt="test" StartHour={ new Date().getHours().toString() } StartMinute={ new Date().getMinutes().toString() } Title={ "notte candele".toUpperCase()}
            BtnTitle="Leggi altro"/>
            <Event Text={ text } Date={ new Date().toDateString() } EventAlt="test" StartHour={ new Date().getHours().toString() } StartMinute={ new Date().getMinutes().toString() } Title={ "notte candele".toUpperCase() }
            BtnTitle="Leggi altro"/>
            <Event Text={ text } Date={ new Date().toDateString() } EventAlt="test" StartHour={ new Date().getHours().toString() } StartMinute={ new Date().getMinutes().toString() } Title={ "notte candele".toUpperCase() }
            BtnTitle="Leggi altro"/>
            <Event Text={ text } Date={ new Date().toDateString() } EventAlt="test" StartHour={ new Date().getHours().toString() } StartMinute={ new Date().getMinutes().toString() } Title={ "notte candele".toUpperCase() }
            BtnTitle="Leggi altro"/>
            <div className={ Styles.buttonContainer }> 
                <a id="readMore">{ "Read more" }</a>
            </div>
        </div>
    );
};

export default News;