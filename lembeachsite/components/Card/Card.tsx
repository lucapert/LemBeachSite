import styles from './Card.module.scss';
import * as React from 'react';

export interface ICardProps {
  Title: string;
  Color: string;
  LinkUrl: string;
  ImgUrl: string;
}

var Card =  (props:ICardProps) => {
  return (
    <div className={ styles.card }>
        <div className={ styles.innerCard }>
          <a href={ props.LinkUrl } className={ styles.linkContainer }>
            <img className={ styles.img } src={ props.ImgUrl } ></img>
          </a>
        </div>
      </div>
  );
};

export default Card;