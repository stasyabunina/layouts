import "../App.css";
import { useState } from 'react';
import IconSwitch from "./IconSwitch";
import products from "./products";
import ListView from "./ListView";
import CardsView from "./CardsView";

function Store() {
    const [icon, setIcon] = useState("view_list");

    function onSwitch(icon) {
        if (icon === "view_list") {
            setIcon("view_module");
        } else {
            setIcon("view_list");
        }
    }

    return (
        <div className="container" >
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            { icon === "view_list" ? <ListView items={products} /> : <CardsView cards={products} /> }
        </div>
    )
}

export default Store;