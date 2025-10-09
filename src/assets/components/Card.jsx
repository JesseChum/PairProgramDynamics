import React from "react";

export default function Card({ item }) {
    let price = item.price_usd 
    if(price >= 70){
        price = price / 2
        price += "  Sale!"
    }


    if (item.style.toLowerCase().includes("logo")){
        console.log(`${item.name} has a logo design!`);
    }

    const isCarRelated = item.car === true || item.car === "true";


    return (
        <div className="card">
        <h2>{item.brand}</h2>
        <h4>{item.name}</h4>
        <p>{item.material}</p>
        <p>{item.style}</p>
        <p>{item.culture}</p>
        <p>Car-related: {isCarRelated ? "True" : "False"}</p>
        <p>Price: {price}</p>
        </div>
    );
}
