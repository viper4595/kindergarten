import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={[style.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const style = {
	containerStyle: {
		paddingTop: 10,
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
        borderBottomWidth: 1,
	}
};

export { CardSection };
