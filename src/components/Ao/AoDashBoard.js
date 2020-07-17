import React from 'react'

function AoDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="ao")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            <h1>AO DashBoard</h1>
        </div>
    )
}

export default AoDashBoard
