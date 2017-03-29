import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	
	return (
		<View style={containerStyle}>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingLeft: 14,
		paddingRight: 5,
		paddingTop: 5,
		fontSize: 16,
		lineHeight: 23,
		flex: 2,

	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
