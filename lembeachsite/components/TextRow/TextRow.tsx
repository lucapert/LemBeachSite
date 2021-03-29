import React from 'react';
import Styles from '../TextRow/TextRow.module.scss';
interface IProps {
    title: string;
    article: string;
}
const TextRow = (props:IProps) => {
    return (
        <div id="textRow" className={ Styles.textRowContainer }>
            <div>
                <h2 >{ props.title }</h2>
                <hr className={ Styles.hrTitle } style={ {borderColor: "#f90"} }/>
                <article className={ Styles.articleTextRow }>
                    { props.article }
                </article>
            </div>
        </div>
    );
};

export default TextRow;