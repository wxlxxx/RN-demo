import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

export default class PopularPage extends React.Component {
	constructor(props){
		super(props)
		this.tabNames = ['Java', 'Android', 'ios', 'React', 'Vue', 'PHP']
	}
	_genTabs(){
		const tabs = {}
		this.tabNames.forEach((item, index) => {
			tabs[`PopularTab${index}`] = {
				screen: props => <PopularTab {...props} tabLabel={item}/>,//动态为组件传数据
				navigationOptions: {
					title: item
				}
			}
		})
		return tabs
	}
	_TabNvigator(){
		return createAppContainer(createMaterialTopTabNavigator(this._genTabs(), {
			tabBarOptions: {
				tabStyle: styles.tabStyle,
				upperCaseLabel: false,
				scrollEnabled: true,
				style: {
					backgroundColor: '#a67'
				},
				indicatorStyle: styles.indicatorStyle,
				labelStyle: styles.labelStyle
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
				<Text onPress={() => {
					NavigationUtil.goPage({}, 'DetailPage')
				}}>跳转到详情页</Text>
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
	},
	tabStyle: {
		minWidth: 50
	},
	indicatorStyle: {
		height: 2,
		backgroundColor: 'white'
	},
	labelStyle: {
		fontSize: 13,
		marginTop: 6,
		marginBottom: 6
	}
})