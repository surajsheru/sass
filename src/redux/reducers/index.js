import {combineReducers} from 'redux'
import {UserReducer} from '../reducers/UserReducer'
import {LoginReducer} from '../reducers/UserLoginReducer'
import { FacInfoReducer } from './FacInfoReducer'

const Rootreducer=combineReducers({
    User:UserReducer,
    Login:LoginReducer,
    Facinfo:FacInfoReducer
})

export default Rootreducer