import React,{useState} from 'react'
import {connect} from 'react-redux'
import {UserLog} from '../redux/actions/CasActions'
import {Link,Redirect,withRouter} from 'react-router-dom'
import Footer from './Footer'
import logo from '../cas.png'
function UserLogin(props) {
   
     const [un,setUn]=useState("")
    const [pwd,setPwd]=useState("")
    const[valid,setvalid]=useState("")
    
    const handleSubmit=(e)=>{
     e.preventDefault()
     const user={
         un:un,
         pwd:pwd
     }
     
     props.LoginUser(user)
     
     setPwd("")
     setUn("")
    
      
}
   
    return (
        <>
        
        <div className="App-Card">
        <img src={logo} alt="CAS" width="200 px" height="200px"></img>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className=" container form-group" style={{width:"260px"},{marginLeft:"5px"}}>
    <h5>USER LOGIN</h5>
    <br/>
                <span>User Name</span>
                 <input  className="form-control  "  type="text" value={un} onChange={(e)=>{setUn(e.target.value)}} placeholder="enter user name"></input><br/>
                 <span>User Password</span>
                <input className="form-control  "  type="password" value={pwd} onChange={(e)=>{setPwd(e.target.value)}} placeholder="password"></input><br/>
                <button className="btn btn-sm btn-secondary " type="submit">LOGIN</button>
                <br/>
                {<Link style={{color:"white"}} to='/reg'>Not having Account<b style={{color:"red"}}>Register here</b></Link>}<br/>
                {<Link style={{color:"white"}}  to="/">Forgot Username/Password<b style={{color:"red"}}>Click here</b></Link>}                
                </div>
            </form>
           
       <Footer/>
       {console.log(props.LUser) }
    {props.LUser.utype==="p"?<Redirect to={
        {          
            pathname: "/Principal",
            state: { ltype:"p"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='hod'?<Redirect to={
        {          
            pathname: "/Hod",
            state: { ltype:"hod"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='f'?<Redirect to={
        {          
            pathname: "/Faculty",
            state: { ltype:"f"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='ex'?<Redirect to={
        {          
            pathname: "/Esection",
            state: { ltype:"ex"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='as'?<Redirect to={
        {          
            pathname: "/Asection",
            state: { ltype:"as"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='ao'?<Redirect to={
        {          
            pathname: "/Ao",
            state: { ltype:"ao"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='o'?<Redirect to={
        {          
            pathname: "/Office",
            state: { ltype:"o"  }
          
        }
    }></Redirect>:
    props.LUser.utype==='stu'?<Redirect to={
        {          
            pathname: "/Student",
            state: { ltype:"stu"  }
          
        }
    }></Redirect>:
    <div className="alert-danger" role="alert"> Not Loggged </div>}
        
        
        </div>
        
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
       LUser:state.Login
       }
  
}
const mapActionToProps={
    LoginUser:UserLog
      }
export default connect(mapStateToProps,mapActionToProps)(withRouter(UserLogin)) 
