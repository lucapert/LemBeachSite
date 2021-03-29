import React from 'react';
import Styles from '../TextRow/TextRow.module.scss';
const TextRow = () => {
    return (
        <div className={ Styles.textRowContainer }>
            <h2 >MARE, SPORT, DIVERTIMENTO E TANTO ALTRO...</h2>
            <hr className={ Styles.hrTitle } style={ {borderColor: "#f90"} }/>
            <article className={ Styles.articleTextRow }>
                Al LEM troverai strutture sportive per poter tenerti sempre in allenamento. Corsi per tutti i livelli e tutte le fasce di età.
            </article>
        </div>
    );
};

export default TextRow;