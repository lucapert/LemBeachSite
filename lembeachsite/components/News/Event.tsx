import React from 'react';
import Styles from './Event.module.scss';
interface IProps 
{
    Date: string;
    StartHour: string;
    StartMinute: string;
    Title: string;
    Text: string;
    EventAlt: string;
    BtnTitle: string;
}
const Event = (props: IProps) => {
    return (
        <div className={Styles.eventContainer + " gridCol gridSpan-1-of-4"}>
            <img src="https://fakeimg.pl/300x200/" alt={ props.EventAlt } />
            <h5>{ props.Title }</h5>  
            <div className={Styles.eventFeature}>
                <i className={Styles.eventIcon + " ion-calendar"}></i>
                { props.Date }
            </div>
            <div className={Styles.eventFeature}>
                <i className={Styles.eventIcon + " ion-clock"}></i>
                { props.StartHour }:{ props.StartMinute }
            </div>
            <p className={ Styles.eventText }>
                { props.Text }
            </p>
        </div>
    );
};

export default Event;