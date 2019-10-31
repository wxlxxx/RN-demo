import {applyMiddleware, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducer' //使store.dispatch()可以接受函数

const middlewares = [
	reduxThunk
]

// 2.创建store
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store