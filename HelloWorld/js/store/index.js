import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk' //使store.dispatch()可以接受函数
import reducers from '../reducer'


const logger = store => next => action => {
	if(typeof action === 'function'){
		console.log('dispatching a function')
	}else{
		console.log('dispatching a action')
	}
	const result = next(action)
	console.log('nextState', store.getState())
	return result
}
const middlewares = [
	logger,
	reduxThunk
]

// 2.创建store
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store