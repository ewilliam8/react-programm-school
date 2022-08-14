import styles from './Banner.module.scss';

function Banner(props) {
    return (
        <div className={styles.Banner}>
            <img src={props.src} alt="Баннер" />
        </div>
    );
}

export default Banner;