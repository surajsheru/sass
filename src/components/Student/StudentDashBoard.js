import React from 'react'
import Header from './Header'
import SideNav from './SideNav'

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
        <div className="container-flux">
        <Header name={props.location.state.user.un}/>
        <SideNav/>
        <div className="container-lg" >
        <div className="row">
          <div className="col-6"> 
            <div className="card">
            <div className="card-body">
                Student information
                
            </div>

            </div>
          </div>
          <div className="col-6"> 
          <div className="card">
            <div className="card-body">
                class teachers and Councellers information
               
            </div>

            </div>
          </div>
                  
          
        </div>

        
        <div className="row">
        <div className="col-4"> 
          <div className="card">
            <div className="card-body">
            MOnthly attandance report
            </div>

            </div>
          </div>
          <div className="col-4"> 
          <div className="card">
            <div className="card-body">
            See  external ,mid and Assignment marks
            </div>

            </div>
          </div>
          <div className="col-4"> 
          <div className="card">
            <div className="card-body">
                NOtices
            </div>

            </div>
          </div>
        </div>
        <div className="row">
       <div className="col">
       <div class="card">
<h5 class="card-header">Classess timetables</h5>
<div class="card-body">
<h5 class="card-title">Special title treatment</h5>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>            </div>
        </div>
       <span style={{color:"red"}}>&copy BY SASS{new Date().getFullYear}</span>
    </div>

    )
}

export default StudentDashBoard
