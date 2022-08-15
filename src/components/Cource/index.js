import styles from './Cource.module.scss';

function Cource (props) {
    return (
        <div>
        { props.left ? 
            <div className={styles.CourceLeft}>
                <div className={styles.bannerLeft}>
                    <img src={props.imgSrc} alt="Cource" />
                </div>
                <div className={styles.infoLeft}>
                    <h1>{props.title}</h1>
                    <h2>{props.titleInfo}</h2>
                    <p>{props.text}</p>
                </div> 
            </div>
                :
            <div className={styles.CourceRight}>
                <div className={styles.infoRight}>
                    <h1>{props.title}</h1>
                    <h2>{props.titleInfo}</h2>
                    <p>{props.text}</p>
                </div>
                <div className={styles.bannerRight}>
                    <img src={props.imgSrc} alt="Cource" />
                </div>
            </div>       
        }
        </div>
    );
}

export default Cource;