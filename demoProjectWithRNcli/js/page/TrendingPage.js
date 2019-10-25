import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class TrendingPage extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					TrendingPage
				</Text>
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