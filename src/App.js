import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router";
import Orders from "./containers/Orders/Orders";



class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path='/orders' component={Orders}/>
                    <Route render={() => (
                        <h1>Page not found</h1>
                    )}/>
                </Switch>
            </Layout>

        </div>
    );
  }
}

export default App;
