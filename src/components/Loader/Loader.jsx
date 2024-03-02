import styles from '../Loader/Loader.module.css';

const Loader = ({ isVisible }) => {
    return (
        <>
            {
                isVisible &&
                <div className={ styles.container }>
                    <div className={ styles.loader }></div>
                </div>
            }
        </>
    );
}

export default Loader;
