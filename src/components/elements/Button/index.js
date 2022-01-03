import './button-styles.css';

export default function Button({type, children, className, id, onClick, onSubmit, onMouseEnter, onMouseLeave, style }) {
    let buttonClassList = (className) ? className : '';
    let buttonID = (id) ? id : '';
    return (
        <button className={`h-element-button ${buttonClassList}`} id={buttonID}
            style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSubmit={onSubmit}
        >{children}</button>
    )
}