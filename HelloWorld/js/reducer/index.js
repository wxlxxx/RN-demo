import {combineReducers} from 'redux'
import theme from './theme'

// 1.创建reducer
const index = combineReducers({
	theme: theme
})

export default index