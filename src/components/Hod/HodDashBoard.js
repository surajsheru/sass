import React from 'react'

function HodDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="hod")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Hod dash board
        </div>
    )
}

export default HodDashBoard
