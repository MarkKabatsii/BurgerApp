import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from 'axios'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        data: {},
        error: false,
    }

    componentDidMount() {
        axios
            .get('https://burgerapp-65a5f.firebaseio.com/orders.json')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(error => {this.setState({error: true})})
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.data).map(user => {
                    return (<Order
                        key={user}
                        ingredients={this.state.data[user]['ingredients']}
                        price={this.state.data[user]['price']}/>)
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);