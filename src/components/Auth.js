import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import { Text } from 'react-native';

class Auth extends Component {
    componentWillMount() {
        this.props.logOut();
        console.log('Mounted');
    }
    render() {
        return <Text />;
    }
}

export default connect(null, { logOut })(Auth);