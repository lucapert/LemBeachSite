import Card from '../Card/Card';
import Styles from '../Cards/Cards.module.scss';
import React from 'react';

const Cards = () => {
    return (
        <div className={ Styles.cardsContainer }>
            <Card Title="Corsi windsurf di gruppo" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="Corsi windsurf base" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="Corsi windsurf intermedi" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="Corsi windsurf avanzati" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="Tesseramenti" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>  
            <Card Title="Tesseramenti" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>   
        </div>
    );
};

export default Cards;