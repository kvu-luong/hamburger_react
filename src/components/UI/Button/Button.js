import React from "react";
import classes from "./Button.css";

const button = (props) =>{
    return <button
    className={[classes.Button, classes[props.btnType]].join(' ')}//because in button.css we have success and danger.
    onClick = {props.clicked}>{props.children}</button>
}
export default button;