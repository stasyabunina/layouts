import "../App.css";

function ShopCard({ name, color, img, price }) {
    return (
        <li className="card-view__item">
            <div className="card-view__name">{name}</div>
            <div className="card-view__color">{color}</div>
            <picture className="card-view__img-wrapper">
                <img className="card-view__img" src={img} alt={name} />
            </picture>
            <div className="card-view__price-btn-wrapper">
                <span className="card-view__price">{"$" + price}</span>
                <button className="card-view__btn" type="button">Add to card</button>
            </div>
        </li>
    )
}

export default ShopCard;