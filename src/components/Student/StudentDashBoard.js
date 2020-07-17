import React from 'react'

function StudentDashBoard(props) {
    
    try{
    if(props.location.state.ltype!=="stu")
    {
        alert("not logged")
        
    }}
    catch(error){
        alert("notlogged")
        props.history.push('/')
    }
    return (
        <div>
            Student dash board
        </div>
    )
}

export default StudentDashBoard
