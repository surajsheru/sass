import React from 'react'

function OfficeDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="o")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Office dashboard
        </div>
    )
}

export default OfficeDashBoard
