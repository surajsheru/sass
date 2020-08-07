import React from 'react'

import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className="container"   >
        <div class="row">
        <div class="col-sm-8"><h3 style={{color:"green"}}>COMPLETE ACADEMIC SOLUTIONS</h3></div>
    <div class="col-sm-4">
    <span style={{alignContent:"right"}}><b>{props.name}</b></span>
    <Link to='/' style={{color:"red"}}>{"   "}<small>LOGOUT</small></Link>
    </div>
  </div>
        
            
        </div>
    )
}

export default Header
