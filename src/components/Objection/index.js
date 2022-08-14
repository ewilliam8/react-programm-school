import styles from './Objection.module.scss';

function Objection (props) {
    return (
        <div className={styles.Objection}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default Objection;