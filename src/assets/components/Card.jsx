import React from "react";

export default function Card({ item }) {
    let price = item.price_usd 
    if(price >= 70){
        price = price / 2
        price += " Sale!"
    }

    if(item.car){
        // do something
    }

    // if (style contains 'logo') {
    // do something
    // }

    return (
        <div>
        <h2>{item.brand}</h2>
        <h4>{item.name}</h4>
        <p>{item.material}</p>
        <p>{item.style}</p>
        <p>{item.culture}</p>
        <p>{price}</p>
        <hr/>
        </div>
    );
}
