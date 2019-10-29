import React from 'react'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtil from '../navigator/NavigationUtil'


export default class HomePage extends React.Component {
	render(){
		// 修复动态导航器里的页面无法跳转到外部页面的问题
		NavigationUtil.navigation = this.props.navigation
		return <DynamicTabNavigator/>
	}
}