import React from "react";
import classes from './Order.module.css'

const order = (props) => {
    const orderIngredients = []
    for(let ingredientName in props.ingredients){
        orderIngredients.push({
            name: ingredientName,
            amount:props.ingredients[ingredientName]
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
            <h4>Ingredients:{ingredientOutput}</h4>
            <h4>Price: &#x24;{Math.floor(props.price).toFixed(2)}</h4>
        </div>
    );
}

export  default order;