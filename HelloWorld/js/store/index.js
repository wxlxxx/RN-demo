import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'

const middlewares = [
	thunk
]

// 2.创建store
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store