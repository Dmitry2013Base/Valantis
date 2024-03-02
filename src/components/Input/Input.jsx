import styles from '../Input/Input.module.css';


const Input = ({ innerRef, ...props }) => {
    return (
        <input { ...props } ref={ innerRef } className={ styles.input }/>
    );
}

export default Input;
