import "../App.css";

function ShopItem({ name, color, img, price }) {
    return (
        <li className="list-view__item">
            <picture className="list-view__img-wrapper">
                <img className="list-view__img" src={img} alt={name} />
            </picture>
            <div className="list-view__name">{name}</div>
            <div className="list-view__color">{color}</div>
            <span className="list-view__price">{"$" + price}</span>
            <button className="list-view__btn" type="button">Add to card</button>
        </li>
    )
}

export default ShopItem;