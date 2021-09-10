import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return <>
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 " style={{width:"100%"}}>

           
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{borderRadius: "41px", padding: '0'}}>
        <div className="container-fluid">
        <Router>
           <Link to='/' className='navbar-brand' style={{marginRight: '34%',fontSize: '2.5rem'}}> PortFolio </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                <li className='nav-item menuitem' style={{marginRight: "18%", fontSize: '2rem'}}><Link to='/login' activeclassName="menu-active" className="nav-link">Projects</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "18%", fontSize: '2rem'}}><Link to='/signup' activeclassName="menu-active" className="nav-link">Certificates</Link><span></span></li>
                <li className='nav-item menuitem' style={{fontSize: '2rem'}}><Link to='/contact' activeclassName="menu-active" className="nav-link">Contact</Link><span></span></li>
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