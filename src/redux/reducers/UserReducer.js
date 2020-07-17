import {REG} from '../actions/CasActionTypes'
export const UserReducer=(state="",action)=>{
   console.log(action.payload)
      switch(action.type)
      {
       case REG:
           return action.payload
     default:
          return state
      }

}

