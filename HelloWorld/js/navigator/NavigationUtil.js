export default class NavigationUtil {
	static goPage(params, page){
		const navigation = this.navigation
		if(!navigation){
			console.log('NavigationUtil.navigation can not be null')
		}else{
			navigation.navigate(page, {...params})
		}
	}

	static resetToHomePage(params){
		const {navigation} = params
		navigation.navigate('Main')
	}
}