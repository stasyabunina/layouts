import "../App.css";
import ShopItem from "./ShopItem";

function ListView({ items }) {
    return (
        <ul className="list-view">
            {items.map(item =>
                <ShopItem
                    name={item.name}
                    color={item.color}
                    img={item.img}
                    price={item.price}
                />
            )}
        </ul>
    )
}

export default ListView;