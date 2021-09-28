import React, {useState} from 'react';

import {Link} from 'react-router-dom';

const Navbar = () => {

    const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = () => {
        if(window.scrollY >0) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return <>
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 " style={{width:"100%",padding: '0'}} >

           
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{borderRadius: "0px", padding: '0'}}>
        <div className="container-fluid" style={colorChange?{background: '#3e98c7',color: 'white',transition: '2s all ease'}:{background: 'snow',transition: '2s all ease'}}>
    
        
           <Link to='/' className='navbar-brand' style={colorChange?{color:'white',marginRight: '33%',fontSize: '2.5rem',transition: '2s all ease'}:{marginRight: '33%',fontSize: '2.5rem',fontWeight:'bolder'}}> PortFolio </Link>
           <button className="navbar-toggler" style={colorChange?{background: 'white',transition: '2s all ease'}:{}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav mb-2 mb-lg-0'>
                <li className='nav-item menuitem' style={{marginRight: "18%", fontSize: '2rem'}}><Link to='/projects' activeclassname="menu-active" style={ colorChange?{color: 'white'}:{}} className="nav-link">Projects</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "18%", fontSize: '2rem'}}><Link to='/certificates' activeclassname="menu-active" style={ colorChange?{color: 'white'}:{}} className="nav-link">Certificates</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "18%", fontSize: '2rem'}}><Link to='/skills' style={ colorChange?{color: 'white'}:{}} activeclassname="menu-active" className="nav-link">Skills</Link><span></span></li>
                <li className='nav-item menuitem' style={{fontSize: '2rem'}}><Link to='/contact' activeclassname="menu-active" style={ colorChange?{color: 'white'}:{}} className="nav-link">Contact</Link><span></span></li>
                
            </ul>
            </div>
            
            
            </div>
        </nav>
        </div>
        </div>
    </div>
    
    </>
}

export default Navbar;