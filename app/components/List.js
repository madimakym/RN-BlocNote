import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform
} from 'react-native';

import {
	itemListText,
	itemListTextStrike,
	circleInactive,
	circleActive,
} from '../utils/Colors';

const { width } = Dimensions.get('window');

class List extends Component {
	onToggleCircle = () => {
		const { isCompleted, id, completeItem, incompleteItem } = this.props;
		if (isCompleted) {
			incompleteItem(id);
		} else {
			completeItem(id);
		}
	};

	render() {
		const { text, deleteItem, id, isCompleted } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.column}>
					<TouchableOpacity onPress={this.onToggleCircle}>
						<View
							style={[
								styles.circle,
								isCompleted
									? { borderColor: circleActive, backgroundColor: '#D55048' }
									: { borderColor: circleInactive }
							]}
						/>
					</TouchableOpacity>
					<Text
						style={[
							styles.text,
							isCompleted
								? {
										color: itemListTextStrike,
										textDecorationLine: 'line-through'
								  }
								: { color: itemListText }
						]}
					>
						{text}
					</Text>
				</View>
				{isCompleted ? (
					<View style={styles.button}>
						<TouchableOpacity onPressOut={() => deleteItem(id)}>
							<Image 
								style={{width: 20, height: 20}}
								source={require('../assets/icons8-delete.png')} 
							/>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// width: width - 50,
		flexDirection: 'row',
		backgroundColor: 'white',
		// height: width / 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 5,
		marginBottom: 10,
		...Platform.select({
			ios: {
				shadowColor: 'rgb(50,50,50)',
				shadowOpacity: 0.5,
				shadowRadius: 1,
				shadowOffset: {
					height: 1,
					width: 0
				}
			},
			android: {
				elevation: 5
			}
		})
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width / 1.5
	},
	text: {
		fontWeight: '500',
		fontSize: 16,
		marginVertical: 15
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 15,
		borderWidth: 1,
		margin: 10
	},
	button: {
		marginRight: 10
	}
});

export default List;
