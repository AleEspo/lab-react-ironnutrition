import foods from "../../foods.json"
import { useState } from "react"

export function FoodList (props){

    const [food, setFoood] = {useState}

    foods.map() //?  food.map?

    return (
        <div>
        <p>{props.name.value}</p>
        <img src={props.imgage.value} width={0} />
      </div>
    )
}