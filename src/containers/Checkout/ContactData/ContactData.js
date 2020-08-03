import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css'
import axios from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading:false,
    }

    order = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        console.log(this.props.price)



        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mark Kabatsii',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '123456',
                    city: 'Tel-Aviv',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios
            .post('https://burgerapp-65a5f.firebaseio.com/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/orders')
            })
            .catch(error => {
                this.setState({loading: false})
            })


    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name={this.state.name} placeholder='Name'/>
                <input className={classes.Input} type="text" name={this.state.email} placeholder='Email'/>
                <input className={classes.Input} type="text" name={this.state.address.street} placeholder='Street'/>
                <input className={classes.Input} type="text" name={this.state.address.postCode} placeholder='Post Code'/>
                <Button btnType='Success' clicked={this.order}>Order</Button>
            </form>
        )
        if(this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Order Form</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;