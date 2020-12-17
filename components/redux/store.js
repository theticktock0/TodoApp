import {createStore, combineReducers} from 'redux'
import historyReducer from './reducers/historyReducer'

const rootReducer = combineReducers({
    historyReducer: historyReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;