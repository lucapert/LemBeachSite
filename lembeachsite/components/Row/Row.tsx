import React from 'react';
import Styles from '../Row/Row.module.scss';
interface IProps {
    backGroudColor: string;
    children: JSX.Element;
    styles: string;
}

const Row = (props:IProps) => {
    return (
        <div className={ [Styles.rowContainer, props.styles ? props.styles:""].join(" ") } style={{ backgroundColor: props.backGroudColor }}>
            <div className={Styles.inner + " outerContainer"}>
                { props.children }
            </div>
        </div>
    );
};

export default Row;