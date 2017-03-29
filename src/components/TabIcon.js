import React, {Component} from 'react';
import {View, Image} from 'react-native';

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
            <View style={{ flex: 1, backgroundColor: '#ff5763' }}>
                <Image
                    source={icon}
                    style={{
                        height: 24,
                        width: 24,
                        flex: 1,
                        marginTop: 10
                    }}
                    resizeMode={'contain'}
                    position='absolute'
                />
            </View>
        );
    }
}

export default TabIcon;
