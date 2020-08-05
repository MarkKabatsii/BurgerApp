import React from "react";
import classes from './Order.module.css'

const order = (props) => {
    const orderIngredients = []
    for (let ingredientName in props.ingredients) {
        orderIngredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    const ingredientOutput = orderIngredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                border: '1px solid #eee',
                boxShadow: '0 3px 4px #ccc',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px',
            }} key={ig.name}>
            {ig.name} ({ig.amount})
        </span>
    })
    return (
        <div className={classes.Order}>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Street:</strong> {props.street}</p>
            <p><strong>Delivery Method:</strong> {props.delivery}</p>
            <p><strong>Ingredients:</strong> {ingredientOutput}</p>
            <p><strong>Price:</strong> &#x24;{props.price.toFixed(2)}</p>
        </div>
    );
}

export default order;