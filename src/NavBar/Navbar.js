import React from 'react'
import {Link, NavLink}  from 'react-router-dom'
import './navbar.css';


function Navbar(){
    return(
        <nav className="nav-wrapper navbar-expand-md darken-3 black">
        <div className="container">
              <div className="brand-logo navbar-text" style={{left : "5%"}}>SL</div>
              </div>
         <button className="navbar-toggler icon" data-toggle="collapse" data-target="#navbarResponsive">
             <span className="navbar-toggler-icon" ></span>
         </button>
          <div className="collapse navbar-collapse right" id="navbarResponsive">
              <ul className="navbar-nav">
                  <li className="nav-item active"><NavLink className = "link active"  to='/'>Home</NavLink></li>
                  <li className="nav-item "><NavLink className = "link" to='/Projects'>Projects</NavLink></li>
                  <li className="nav-item"><NavLink className = "link" to='/Interests'>Interests</NavLink></li>
                  <li className="nav-item"><NavLink className = "link" to='/Photos'>Photos</NavLink></li>
                  <li className="nav-item"><NavLink className = "link" to='/AboutMe'>About Me</NavLink></li>
              </ul>
         </div>
     </nav>
    );
}
export default Navbar

/* 
 <nav className="nav-wrapper navbar navbar-in">
           <div className="container-fluid navbar-header"> 
           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar" />
                    <span class="icon-bar" />
                    <span class="icon-bar" />                        
                </button> 
    //             <div className="brand-logo navbar-brand navbar-text" style={{left : "5%"}}>SL</div>
    //          </div>
            
    //          <div className="collapse navbar-collapse right" id="myNavbar">
    //             <ul className="navbar-nav">
    //                 <li className="nav-item"><NavLink className = "link nav-link-grow-up active"  to='/'>Home</NavLink></li>
    //                 <li className="nav-item "><NavLink className = "link nav-link-grow-up" to='/Projects'>Projects</NavLink></li>
    //                 <li className="nav-item"><NavLink className = "link nav-link-grow-up" to='/Interests'>Interests</NavLink></li>
    //                 <li className="nav-item"><NavLink className = "link nav-link-grow-up" to='/Achievements'>Achivements</NavLink></li>
    //                 <li className="nav-item"><NavLink className = "link" to='/AboutMe'>About Me</NavLink></li>
    //             </ul>
    //        </div>
    //    </nav>
*/