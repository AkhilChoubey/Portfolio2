import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return <>
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 " style={{marginTop: "1%" , width:"100%"}}>

           
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{borderRadius: "41px"}}>
        <div className="container-fluid">
        <Router>
           <Link to='/' className='navbar-brand'> RecipeBook </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/login' activeclassName="menu-active" className="nav-link">Login</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/signup' activeclassName="menu-active" className="nav-link">Sign Up</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/contact' activeclassName="menu-active" className="nav-link">Contact</Link><span></span></li>
                {/* <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/about' activeclassName="menu-active" className="nav-link">About</Link><span></span></li> */}
            </ul>
            </div>
            {/* <span className="slide"></span> */}
            </Router>
            </div>
        </nav>
        </div>
        </div>
    </div>
        
    </>
}

export default Navbar;