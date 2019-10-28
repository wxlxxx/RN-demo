import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

export default class FavoritePage extends React.Component {
	render(){
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>FavoritePage</Text>
				<Button
					title={'修改主题'}
					onPress = {() => {
						navigation.setParams({
							theme: {
								tintColor: 'orange',
								updateTime: new Date().getTime()
							}
						})
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center'
	}
})