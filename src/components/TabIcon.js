import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

class TabIcon extends Component {


    render() {
        let icon = '';
        switch (this.props.title) {
            case 'Tab #1':
                icon = require('assets/icons/icHome@3x_fix.png');
                break;
            case 'Tab #2':
                icon = require('assets/icons/icFavNotChoose@3x.png');
                break;
            case 'Tab #3':
                icon = require('assets/icons/icLogOut@3x.png');
                break;
            default:
                break;
        }


        return (
            <View style={{ height: 60, width: 130, backgroundColor: 'white', alignItem: 'center' }}>
                    <Image
                        source={icon}
                        style={{
                            height: 26,
                            width: 26,
                            marginLeft: 50,
                            marginTop: 15,
                        }}
                        resizeMode={'contain'}
                    />
            </View>
        );
    }
}

export default TabIcon;
