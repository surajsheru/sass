import React from 'react'

function AsectionDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="as")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Academic section
        </div>
    )
}

export default AsectionDashBoard
