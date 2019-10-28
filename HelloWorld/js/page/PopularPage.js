import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class PopularPage extends React.Component {
	_TabNvigator(){
		return createAppContainer(createMaterialTopTabNavigator({
			PopularTab1: {
				screen: PopularTab,
				navigationOptions: {
					title: 'Tab1'
				}
			},
			PopularTab2: {
				screen: PopularTab,
				navigationOptions: {
					title: 'Tab2'
				}
			}
		}))
	}
	render(){
		const TabNvigator = this._TabNvigator()
		return (
			<View style={styles.container}>
				<TabNvigator/>
			</View>
		)
	}
}

class PopularTab extends React.Component {
	render(){
		return (
			<View>
				<Text>PopularTab</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
})