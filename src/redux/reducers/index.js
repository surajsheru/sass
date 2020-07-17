import {combineReducers} from 'redux'
import {UserReducer} from '../reducers/UserReducer'
import {LoginReducer} from '../reducers/UserLoginReducer'

const Rootreducer=combineReducers({
    User:UserReducer,
    Login:LoginReducer
})

export default Rootreducer