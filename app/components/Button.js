import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ deleteAllItems }) => (
	<TouchableOpacity onPress={deleteAllItems}>
		<Text style={{color:'white'}}>Tout supprimer</Text>
	</TouchableOpacity>
);

export default Button;
