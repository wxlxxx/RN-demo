import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
import DataStoreDemoPage from '../page/DataStoreDemoPage'

const InitNavigator = createStackNavigator({
	WelcomePage: {
		screen: WelcomePage,
		navigationOptions: {
			header: null
		}
	}
})

const MainNavigator = createStackNavigator({
	HomePage: {
		screen: HomePage,
		navigationOptions: {
			header: null
		}
	},
	DetailPage: {
		screen: DetailPage,
		navigationOptions: {
			// header: null
		}
	},
	DataStoreDemoPage: {
		screen: DataStoreDemoPage,
		navigationOptions: {
			// header: null
		}
	}
})

export default createAppContainer(createSwitchNavigator(
	{
		Init: InitNavigator,
		Main: MainNavigator
	}, 
	{
		navigationOptions: {
			header: null
		}
	}
))