import React from 'react'
import {Redirect} from 'react-router-dom'

function PrincipalDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="p")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    
    return (
        <div>
            <h1>principal dash board</h1>
        </div>
    )
}

export default PrincipalDashBoard
