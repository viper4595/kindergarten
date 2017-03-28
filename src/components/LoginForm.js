import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    componentWillMount() {
        this.renderSplashScreen();
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const email = this.props.email;
        const password = this.props.password;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LOGIN
            </Button>
        );
    }

    renderSplashScreen() {
        return (
            <View style={{ backgroundColor: '#ff5763'}}>
                <Image />
                <Image
                    source={require('assets/icons/logoLogin@3x.png')}
                    style={{
                        height: 235,
                        width: 134,
                    }}
                    resizeMode={'contain'}
                />
            </View>
        );
    };

    render() {
        return (
            <View style={{alignItems: 'center'}}>

                <View>
                    <Image
                        source={require('assets/icons/logoLogin@3x.png')}
                        style={{
                            height: 235,
                            width: 230,
                            marginTop: 80
                        }}
                        resizeMode={'contain'}
                    />
                </View>

                <CardSection
                    style={{
                        marginTop: 70,
                        marginLeft: 50,
                        marginRight: 50,
                    }}
                >
                    <Image
                        source={require('assets/icons/icMail@3x.png')}
                        style={{
                                height: 23,
                                width: 23,
                                marginTop: 10
                        }}
                        resizeMode={'contain'}
                    />

                    <Input
                        placeholder="Username"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection
                    style={{
                        marginTop: 5,
                        marginLeft: 50,
                        marginRight: 50}}
                >
                    <Image
                        source={require('assets/icons/icLock@3x.png')}
                        style={{
                            height: 23,
                            width: 23,
                            marginTop: 10
                        }}
                        resizeMode={'contain'}
                    />
                    <Input
                        secureTextEntry
                        label=" "
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection style={{
                    marginTop: 30,
                    marginLeft: 50,
                    marginRight: 50,
                    borderBottomWidth: 0 }}
                >
                    {this.renderButton()}
                </CardSection>

            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser })(LoginForm);