import React from "react";
import Card from "./Card";

export function CardList({ hoodies }){
    return(
    <div>
        {hoodies.map((item) => (
            <Card key={item.id} item = {item}/>
        ))}
    </div>
    );
}