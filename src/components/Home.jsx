import React from 'react';
import newbg from './profile.jpg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router } from 'react-router-dom';
import bg from '../background/new.gif';
// import bg1 from '../background/new2.gif';
// import bg2 from '../background/new3.gif';
// import bg3 from '../background/new4.gif';
// import bg4 from '../background/new5.gif';
// import bg5 from '../background/new6.gif';
// import bg6 from '../background/new7.gif';
//import bg7 from '../background/new8.gif';

const Home = () => {

return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`, backgroundAttachment: "fixed",backgroundRepeat: "no-repeat", backgroundSize: 'cover',height: '32rem'}} >
    
    {/* <h1> {props.location.state.details.first_name}</h1> */}
    <section id="header" className="d-flex align-items-center" style={{marginTop: '5.1%',paddingTop: '75px'}} >
    <div id="title" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" >
                <h1>Hello, I am Akhil Kr Choubey <strong className="brand-name"> 
                <Typewriter options={{  strings: ["I am a Web Developer", "I am a Programmer", "I am a Debugger"],  autoStart: true,  loop: true,changeDelay:2 }}/>

              </strong>
               </h1>
               {/* <h2 className="my-3" style={{color:"white"}}>
               {/* <Typewriter options={{  strings: ['Search for your favourite food', "Let's surprise others with our cooking talent"],  autoStart: true,  loop: true,changeDelay:2 }}/> 
               </h2>
                 */}
                <div className="mt-3">
                <Router>
                    <Link to='/meal' className="btn-get-started ">Certificates</Link>
                    <Link to='/healthy' className="btn-get-started " style={{marginLeft: "5%"}}>Projects</Link>
                </Router>
                </div>
                </div>
        </section>
    </div>
}

export default Home;
