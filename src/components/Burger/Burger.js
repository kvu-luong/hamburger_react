import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props)=>{
    //get ingredient object and then covert it to array//   
    let transformIngredient = Object.keys(props.ingredients)//get key: salad, chess, etc
        .map(igKey =>{//igKey: salad, meat, bacon, cheese
            // console.log(props.ingredients[igKey]);//key 1, 1, 2, 3
            return [...Array(props.ingredients[igKey])].map((_, index)=>{//Array() create space in rarray with number: [...Array(2)]-> array with two undefined element.
                return <BurgerIngredient key= {igKey + index} type = {igKey} />;
            });
        })
        .reduce((arr , el) =>{//group all array to 1 array to get the lenght when we have no ingredient.
            return arr.concat(el);
        },[]);
    if(transformIngredient.length === 0){
        transformIngredient = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;