import React from 'react'

function Footer() {
    let y=new Date().getFullYear
    return (
        <>
         <div>&copy;  <a href="#" style={{color:"red"}}>SASS</a> </div> 
         <p style={{color:"white"}}></p>{y}</>  
        
    )
}

export default Footer
