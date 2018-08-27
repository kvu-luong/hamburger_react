import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}

]
const buildControls = (props) => (
        <div className={classes.BuildControls}>
             <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl =>(
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added = {()=> props.ingredientAdded(ctrl.type)}
                    removed = {() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}/>//check which have been existed.
                ))
            }
            <button> ORDER NOW </button>
        </div>
);
export default buildControls;