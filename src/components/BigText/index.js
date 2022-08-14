import styles from './BigText.module.scss';

function BigText (props) {
    return (
        <h1 className={styles.BigText}>{props.text}</h1>
    );
}

export default BigText;