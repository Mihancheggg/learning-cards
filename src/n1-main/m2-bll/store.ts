import {applyMiddleware, combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    loading: loadingReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev