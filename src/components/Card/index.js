import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onClick, onRemove }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (!isAdded) {
      const name = title;
      onClick({ imageUrl, name, price });
    } else {
      // onRemove({ imageUrl, name, price });
    }
  };

  return (
    <div className={styles.card}>
      <img width={100} height={100} src={imageUrl} alt="Курс" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="d-flex">Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img width={18} height={18} src={isAdded ? "/img/icons8-check-mark-48.png" : "/img/icons8-plus-48.png"} alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;