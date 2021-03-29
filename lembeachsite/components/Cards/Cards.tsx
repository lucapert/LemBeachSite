import Card from '../Card/Card';
import Styles from '../Cards/Cards.module.scss';
import React from 'react';

const Cards = () => {
    return (
        <div className={ Styles.cardsContainer }>
            <Card Title="" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
            <Card Title="" Color="red" LinkUrl="https://www.google.it" ImgUrl="https://fakeimg.pl/400x400/"/>    
        </div>
    );
};

export default Cards;