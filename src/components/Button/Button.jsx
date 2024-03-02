import styles from '../Button/Button.module.css';

const Button = ({ children, ...props }) => {
    return (
        <button className={ styles.button } onClick={ props.onClick } { ...props }>{ children }</button>
    );
}

export default Button;
