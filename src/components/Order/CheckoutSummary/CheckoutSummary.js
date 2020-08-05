import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <Burger ingredients={props.ingredients}/>
            <Button btnType="Danger" clicked={props.checkoutCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )
}

export default checkoutSummary;