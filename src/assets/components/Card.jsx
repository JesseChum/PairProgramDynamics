import React from "react";

export default function Card({ item }) {
    let price = item.price_usd 
    if(price >= 70){
        price = price / 2
        price = ~~price
        price += " on sale now!"
    }

    let style = item.name;
    if (item.style.toLowerCase().includes("logo")){
        style = `Features a car logo`
    }

    let isCarRelated = item.car;
    if(!isCarRelated){
        isCarRelated = "";
    }
    else{
        isCarRelated = "Features a car!"
    }


    return (
        <div className="card">
        <h2>{item.brand}</h2>
        <h4>{item.name}</h4>
        <p>{item.material}</p>
        <p>{style}</p>
        <p>{item.culture}</p>
        <p>{isCarRelated}</p>
        <p>Price: {price}</p>
        </div>
    );
}
