import React from 'react'

function EsectionDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="ex")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Exam sextion
        </div>
    )
}

export default EsectionDashBoard
