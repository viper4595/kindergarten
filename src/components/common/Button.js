import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
		padding: 10,
		justifyContent: 'center'
	},
	buttonStyle: {
        flex: 1,
		height: 45,
		alignSelf: 'stretch',
		backgroundColor: '#ff5763',
		borderRadius: 100
	}
};

export { Button };
