import {LOGIN} from '../actions/CasActionTypes'
export const LoginReducer=(state={},action)=>{
   console.log(action.payload)
      switch(action.type)
      {
       case LOGIN:
           return action.payload
     default:
          return state
      }

}