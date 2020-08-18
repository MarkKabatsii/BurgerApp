import React, { Component } from "react";
import {Redirect} from "react-router";
import * as actions from '../../../store/actions/index'
import { connect } from 'react-redux'

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout()
    }

    render() {
        return (
            <div>
                <Redirect to='/'/>
            </div>
        );
    }
}

const mapDispatchProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchProps)(Logout);