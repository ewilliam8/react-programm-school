import styles from './Stories.module.scss';

function Stories (props) {
    return (
        <div className={styles.Stories}>
            <img src={props.src} alt="story" />
        </div>
    );
}

export default Stories;