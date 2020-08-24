import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SaladImage from '../../../assets/images/salad.png'
import BreadTop from '../../../assets/images/topBread.png'

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    // <div className={classes.BreadTop}>
                    //     <div className={classes.Seeds1}></div>
                    //     <div className={classes.Seeds2}></div>
                    // </div>
                    <div>
                        <img src={BreadTop} className={classes.Ingredients} alt="Salad ingredients"/>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                // ingredient = <div className={classes.Salad}></div>;
                ingredient =
                    <div>
                        <img src={SaladImage} className={classes.Ingredients} alt="Salad ingredients"/>
                    </div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;