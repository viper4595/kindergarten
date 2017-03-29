import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { ModalButton } from './ModalButton';

// onAccept != onAccept(): don't call the function immediately
const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle, buttonStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection >
                    <ModalButton onPress={onAccept}>Yes</ModalButton>
                    <ModalButton onPress={onDecline}>No</ModalButton>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
