function Drawer({ onCloseCart, items = [], onRemove}) {
  return (
    <div className="overlay">
      <div className="drawer">
      <h2 className="mb-20 d-flex justify-between">Корзина
        <img onClick={onCloseCart} className="removeBtn cu-p" width={30} height={30} src="/img/icons8-remove-64.png" alt="Close" />
      </h2>

      <div className="items">
        {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={70} src="/img/sm_logo.png" alt="Course" />
            <div className="mr-20">
              <p className="mb-5">{obj.name}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img onClick={() => onRemove(obj.id)} className="removeBtn" width={30} height={30} src="/img/icons8-remove-64.png" alt="Remove" />
        </div>
        ))}
      </div>

      <ul className="cartTotalBlock">
        <li>
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>1 071 руб.</b>
        </li>
      </ul>
      <button className="greenButton">Оформить заказ
        <img src="/img/icons8-arrow-24.png" alt="Arrow" />
      </button>
    </div>
  </div>
  );
}

export default Drawer;