import React from 'react'
import logo from '../../cas.png'
function SideNav() {
    return (<>
  
<div  id="mySidenav" className="sidenav">

  <a href="#" id="about" data-toggle="tooltip" data-placement="right" title="Submit Student  Internal Marks"> Submit Marks</a>
  <a href="#" id="blog" data-toggle="tooltip" data-placement="right" title="Do Student Counselling">Councelling</a>
  <a href="#" id="projects" data-toggle="tooltip" data-placement="right" title="Access FeedBack System">Feed Backs</a>
  <a href="#" id="contact" data-toggle="tooltip" data-placement="right" title="Download all imp documents">Downloads</a>
</div>
</>
    )
}

export default SideNav
