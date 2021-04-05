import Styles from './Card.module.scss';
import * as React from 'react';

export interface ICardProps {
  Title: string;
  Color: string;
  LinkUrl: string;
  ImgUrl: string;
}

var Card =  (props:ICardProps) => {
  return (
    <div className={ Styles.card }>
        <div id="card" className={ Styles.innerCard }>
          <a href={ props.LinkUrl } className={ Styles.linkContainer }>
            <img className={ Styles.img } src={ props.ImgUrl } ></img>
            <h1 id="cardTitle" className={ Styles.cardTitle }>{ props.Title }</h1>
          </a>
        </div>
      </div>
  );
};

export default Card;