import React from 'react'

function FacultyDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="f")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Faculty dashboard
        </div>
    )
}

export default FacultyDashBoard
