import React,{useState} from 'react'
import {connect} from 'react-redux'
import {RegUser} from '../redux/actions/CasActions'
import {Link,Redirect} from 'react-router-dom'
import Footer from './Footer'
import logo from '../cas.png'
function UserReg(props) {
    console.log(props.RUser)
     const [un,setUn]=useState("")
    const [pwd,setPwd]=useState("")
    const [cpwd,setCpwd]=useState("")
    const[logas,setLogas]=useState("")
     
    const handleSubmit=(e)=>{
     e.preventDefault()
    //alert(logas)
     if(pwd===cpwd){
     const user={
         un:un,
         pwd:pwd,
         utype:logas
     }
     //alert(user.utype)
     props.UserRegister(user)
     setPwd("")
     setUn("")
     setCpwd("") 
    }
    else{
        alert("password and confirm passwords are not same")
    }
    }
    return (
        <>
        <div className="App-Card">
          <img src={logo} alt="CAS" width="200 px" height="200px"></img>
          <div className="form-group" style={{width:"200px"},{marginLeft:"5px"},{marginTop:"10px"}}>
          <h5>USER REGISTRATION</h5>
            <div className="container"><form onSubmit={(e)=>handleSubmit(e)}>
            <select className="form-control" value={logas} id="Select1" onChange={(e)=>{setLogas(e.target.value)}}>
    <option value="">Register AS</option>
      <option value="p">Principal</option>
      <option value="hod">Hod</option>
      <option value="f">Faculty</option>
      <option value="stu">Student</option>
      <option value="ex">Exam Section</option>
      <option value="as">Academic Section</option>
      <option value="ao">AO</option>
      <option value="o">Office</option>
          </select><br/>
          <span>User Name </span>
                <input type="text" className="form-control  " required value={un} onChange={(e)=>{setUn(e.target.value)}} placeholder="enter user name"></input><br/>
                <label>User Password </label>
                <input type="password" className="form-control " required value={pwd} onChange={(e)=>{setPwd(e.target.value)}} placeholder="password"></input><br/>
                <label>Confirm User Password </label>
                <input type="password" className="form-control  " required value={cpwd} onChange={(e)=>{setCpwd(e.target.value)}} placeholder="Conform password" required></input><br/>
                <button className="btn btn-sm btn-secondary " type="submit">REGISTER</button>
                <br/>
                {<Link style={{color:"white"}} to='/'>having Account <b style={{color:"red"}}>Click here</b></Link>}
                
                
            </form></div>
             {props.RUser?<div className="alert-success">Success</div>:<div className="alert-danger">already user</div> }
             </div>
             
        </div>
        {/* <Footer/> */}
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
       RUser:state.User
       }
  
}
const mapActionToProps={
    UserRegister:RegUser
      }
export default connect(mapStateToProps,mapActionToProps) (UserReg)
