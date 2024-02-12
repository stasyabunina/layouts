import "../App.css";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
    return (
        <ul className="cards-view">
            {cards.map(card =>
                <ShopCard
                    name={card.name}
                    color={card.color}
                    img={card.img}
                    price={card.price}
                />
            )}
        </ul>
    )
}

export default CardsView;