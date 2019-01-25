import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Colors';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Ajouter une tâche..."
		placeholderTextColor={inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		underlineColorAndroid="transparent"
		selectionColor={'white'}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem}
	/>
);

const styles = StyleSheet.create({
	input: {
		paddingTop: 10,
		paddingRight: 15,
		fontSize: 34,
		color: 'white',
		fontWeight: '300'
	}
});

export default Input;
