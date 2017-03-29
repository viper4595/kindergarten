import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import { Confirm } from './common';
import { Actions } from 'react-native-router-flux';

class Auth extends Component {
    state = { showModal: true }

    render() {
        return (
            <Confirm
                visible={this.state.showModal}
                onAccept={() => this.props.logOut()}
                onDecline={() => { this.setState({ showModal: false }); Actions.Home() }}
            >
                Do you want to log out?
            </Confirm>
        );
    }
}

export default connect(null, { logOut })(Auth);
