import React,{useEffect} from 'react';
import newbg from './profile.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router } from 'react-router-dom';
import bg from '../background/new.gif';
import { Navbar } from 'react-bootstrap';
import Skills from './Skills';
import Contact from './Contact';
import Grades from './Grades';
import Academics from './Academics';
import { withRouter } from 'react-router';

const Home = () => {


    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

return <div>
<div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`, backgroundAttachment: "fixed",backgroundRepeat: "no-repeat", backgroundSize: 'cover',height: '32rem'}} >
    
    {/* <Navbar /> */}

    {/* <h1> {props.location.state.details.first_name}</h1> */}
    <section id="header" className="d-flex align-items-center" style={{paddingTop: '75px'}} data-aos='zoom-in'  >
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
    <Skills />
    {/* <Grades /> */}
    <Academics />
    <Contact />
    </div>
}

export default withRouter(Home);
