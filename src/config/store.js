import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
})