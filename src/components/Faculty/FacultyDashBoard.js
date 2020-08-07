import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {facdisp} from '../../redux/actions/CasActions'
import {Link,Redirect,withRouter} from 'react-router-dom'
import Header from './Header'
import SideNav from './SideNav'
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

    useEffect(()=>{
        props.EmpInfo(props.location.state.user.un)
        
    },[])
    const empid=props.location.state.user.un;
    return (
        <div className="container-flux">
            <Header name={props.Emp.empname}/>
            <SideNav/>
            <div className="container-lg" >
            <div className="row">
              <div className="col-6"> 
                <div className="card">
                <div className="card-body">
                    EMP profile
                    {props.Emp.empname}{props.Emp.empdept}
                </div>

                </div>
              </div>
              <div className="col-6"> 
              <div className="card">
                <div className="card-body">
                    EMP Leave
                    <a href="#">applly for Leave</a>
                </div>

                </div>
              </div>
              <div className="col-6"> 
              <div className="card">
                <div className="card-body">
                    EMP ATTAndance POST
                </div>

                </div>
              </div>
              <div className="col-6"> 
              <div className="card">
                <div className="card-body">
                    Emp tt
                </div>

                </div>
              </div>
              
            </div>

            
            <div className="row">
            <div className="col-4"> 
              <div className="card">
                <div className="card-body">
                    Emp tt
                </div>

                </div>
              </div>
              <div className="col-4"> 
              <div className="card">
                <div className="card-body">
                    assign ments to students
                </div>

                </div>
              </div>
              <div className="col-4"> 
              <div className="card">
                <div className="card-body">
                    Notices 
                </div>

                </div>
              </div>
            </div>
            <div className="row">
           <div className="col">
           <div className="card">
  <h5 className="card-header">Research/professional growth</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>            </div>
            </div>
           <span style={{color:"red"}}>copyRight BY SASS</span>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
       Emp:state.Facinfo
       }
  
}
const mapActionToProps={
    EmpInfo:facdisp
      }
export default connect(mapStateToProps,mapActionToProps)(withRouter(FacultyDashBoard)) 
