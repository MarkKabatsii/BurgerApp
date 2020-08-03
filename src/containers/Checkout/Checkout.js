import React, { Component  } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state ={
        ingredients: null,
        price: 0,
    }
componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {}
    let price = 0
    for(let [param, value] of query.entries()){
        if(param === 'price'){
            price = value
        }else {
            ingredients[param] = +value;
        }
    }
    this.setState({
        ingredients: ingredients,
        price: price
    })
}

    checkoutCanceled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled = {this.checkoutCanceled} checkoutContinued = {this.checkoutContinued}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={ (props) => <ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.price}
                        {...props}/>
                }
                />
            </div>
        );
    }
}

export default Checkout;