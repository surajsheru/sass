import React from 'react'

import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className="container"   >
        <div className="row">
        <div className="col-sm-8"> <h3>COMPLETE ACADEMIC SOLUTIONS</h3></div>
    <div className="col-sm-4">
    <span style={{alignContent:"right"}}><b>{props.name}</b></span>
    <Link to='/' style={{color:"red"}}>{"   "}<small>LOGOUT</small></Link>
    </div>
  </div>
        
            
        </div>
    )
}

export default Header
