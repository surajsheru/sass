import {FACDISP} from '../actions/CasActionTypes' 

export const FacInfoReducer=(state={},action)=>{
   // console.log(action.payload)
    switch(action.type){
        
        case FACDISP:
            return action.payload
        default:
            return state

    }

}