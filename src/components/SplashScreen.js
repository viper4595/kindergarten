import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
const timer = require('react-timer-mixin');

class SplashScreen extends Component {

    showSplash() {
      timer.setTimeout(Actions.auth, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ff5763' }}>
                <Image source={require('assets/icons/logoApp@3x.png')}
                style={{
                    height: 500,
                    width: 235,
                    marginTop: 50
                }}
                       resizeMode={'contain'}
                />
                {this.showSplash()}
            </View>
        );
    }
}

export default SplashScreen;
