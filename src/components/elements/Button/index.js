import './button-styles.css';

export default function Button({type, children, className, id, onClick, onSubmit, onMouseEnter, onMouseLeave, style }) {
    let buttonClassList = (className) ? className : '';
    let buttonID = (id) ? id : '';
    
    if (type === 'plain') {
        return (
            <button className={`h-element-button h-element-button_plain ${buttonClassList}`} id={buttonID}
                style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSubmit={onSubmit}
            >{children}</button>
        )
    } else {
        return (
            <button className={`h-element-button h-element-button_solid ${buttonClassList}`} id={buttonID}
                style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSubmit={onSubmit}
            >{children}</button>
        )
    }
}