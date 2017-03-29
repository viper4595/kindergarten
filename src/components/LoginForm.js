import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const email = 'tin@test.com';
        const password = '111111';
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>LOGIN</Button>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView style={{paddingLeft: 50, paddingRight: 50}} behavior='position'>

                <CardSection style={{ justifyContent: 'center', borderBottomWidth: 0}}>
                    <Image
                        style={{
                            height: 235,
                            width: 230,
                            marginTop: 80
                        }}
                        resizeMode={'contain'}
                        source={require('assets/icons/logoLogin@3x.png')}
                    />
                </CardSection>

                <CardSection style={{marginTop: 70}}>
                    <Image
                        style={{height: 20, width: 20, marginTop: 10}}
                        resizeMode={'contain'}
                        source={require('assets/icons/icMail@3x.png')}
                    />

                    <Input
                        placeholder="Username"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Image
                        style={{height: 20, width: 20, marginTop: 10}}
                        resizeMode={'contain'}
                        source={require('assets/icons/icLock@3x.png')}
                    />
                    <Input
                        secureTextEntry
                        label=" "
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection style={{marginTop: 30, borderBottomWidth: 0}}>
                    {this.renderButton()}
                </CardSection>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
