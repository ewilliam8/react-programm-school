import styles from './Teacher.module.scss';

function Teacher(props) {
    return (
        <div className={styles.Teacher}>
            <img src={props.imgSrc} alt="teacher" />
            <p>{props.text}</p>
        </div>
    );
}

export default Teacher;