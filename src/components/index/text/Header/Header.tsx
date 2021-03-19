import Styles from './Header.module.scss';
// in questo componente vediamo anche come inserire lo style
// all'interno della pagina
const Header = () => {
    const x = 5;
    return (
        <div>
            <h1>
                <span className="title">
                    WebDev
                </span> News
            </h1>
            <p className={ Styles.description }>Keep up to date with the latest web dev news</p>
            <style jsx>
                {
                    `.title {
                        color: ${ x > 3 ? 'red' : 'blue' }
                    }
                    `
                }
            </style>
        </div>
    )
}
export default Header