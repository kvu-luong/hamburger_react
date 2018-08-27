import React, {Component} from 'react';
import Aux from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredients : {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
        },
        purchasable:false,
        purchasing: false,
        totalPrice: 4  
    }
    purchaseHandler= ()=>{
        this.setState({purchasing: true});
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey];//get prices of each ingredient.
                    })
                    .reduce((sum, el)=>{
                        return sum + el;//total price
                    },0);

        this.setState({purchasable: sum > 0});//return true if > 0
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);

    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;//modified the value of ingredient
        const priceReduction = INGREDIENT_PRICES[type];//unit price
        const oldPrice = this.state.totalPrice;//original price
        const newPrice = oldPrice - priceReduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseCancelHandler = () =>{//using arrow function to make sure this reffer to class.
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () =>{
        alert("Just continuing");
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){//key: salad, cheese, etc
            disabledInfo[key] = disabledInfo[key] <= 0;//return true or false
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                   <OrderSummary ingredients = {this.state.ingredients}
                    cancleHandler = {this.purchaseCancelHandler}
                    continueHandler = {this.purchaseContinueHandler}
                    price = {this.state.totalPrice}
                   /> 
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;