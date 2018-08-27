import React from "react";
import Aux from "../../../hoc/Auxs";
import Button from "../../UI/Button/Button";
const orderSummary = (props) =>{
    const orderDetail = Object.keys(props.ingredients)
                        .map(igKey =>{
                            return (
                                <li key={igKey}>
                                    <span>{igKey}</span>: {props.ingredients[igKey]}
                                </li>
                            )
                        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Enjoy your hamburger.</p>
            <ul>
                {orderDetail}
            </ul>
            <p><strong>Total Pride</strong>: {props.price.toFixed(2)}</p>
            <p>Continues or Checkout?</p>
            <Button btnType="Danger" clicked={props.cancleHandler}> CANCEL </Button>
            <Button btnType="Success" clicked={props.continueHandler}> CONTINUE </Button>
        </Aux>
    );
}

export default orderSummary;