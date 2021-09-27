import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import swal from 'sweetalert';
import {ImLocation} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {RiSendPlaneFill} from "react-icons/ri";
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
// import conBg from './lapy2.jpg';
import conBg from './connew.jpg';
// import conBg from './connew2.jpg';
import { withRouter } from 'react-router'; 


const Contact = ()=>{

    const HorizontalLine = () => (
        <hr
            style={{
                color: 'white',
                backgroundColor: 'white',
                height: 2
            }}
        />);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    const [name,getName] = useState(null);
    const [email,getEmail] = useState(null);
    const [message,getMessage] = useState(null);
    
   function handleName(e){
        getName(e.target.value);
    }
    function  handleEmail(e){
        getEmail(e.target.value);
    }
    function  handleMessage(e){
        getMessage(e.target.value);
    }

    function handleChange(e){
        e.preventDefault();
        if(name === null) {
            swal({title: "Name cannot be empty " ,icon: "error" });
        } 
        else if(email === null) {
            swal({title : "Email cannot be empty " ,icon: "error" });
        }
        else if(message === null) {
            swal({title: "Message cannot be empty " ,icon: "error" });
        }
        else {
        swal( "Submition Successful ","Thanks for Contacting Us" , "success" );
        }
    }

    function linkedin(){
        window.location.href='https://www.linkedin.com/in/akhil-choubey-376887192';
    }
    function github(){
        window.location.href='https://github.com/AkhilChoubey';
    }
    function facebook(){
        window.location.href='https://www.facebook.com/profile.php?id=100009258792168';
    }
    function twitter(){
        window.location.href='https://twitter.com/AkhilKrChoubey1?s=08';
    }

    return <>
    <section id="contact" style={{background: `url(${conBg})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} > 
    {/* data-aos='fade-down'> */}
  
  <h1 className="section-header eleven" data-aos='fade-down' >Contact</h1>
  
  <div className="contact-wrapper" >
  

    
    <form id="contact-form" className="form-horizontal" onSubmit={handleChange} >
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" onChange={handleName} placeholder="ENTER YOUR NAME" name="name"  style={{marginBottom : '10px'}} data-aos='fade-up'/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" onChange={handleEmail} placeholder="ENTER YOUR EMAIL" name="email"  style={{marginBottom : '10px'}} data-aos='fade-up' />
        </div>
      </div>

      <textarea className="form-control" rows="10" onChange={handleMessage} placeholder="MESSAGE" name="message" style={{marginBottom : '10px'}} required data-aos='fade-down'></textarea>
      
      <button className="btn btn-danger send-button" id="submit" onClick={handleChange}  type="submit" value="SEND">
          <RiSendPlaneFill style={{fontSize: "1.5rem"}}/>
      
      </button>
      
    </form>
    
  
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><ImLocation className="fa fa-2x" style={{fontSize: "1.5rem"}} data-aos='fade-down'/><span className="contact-text place" data-aos='fade-up'>Jharkhand</span></li>
          
          <li className="list-item"><ImPhone style={{fontSize: "1.5rem"}} data-aos='fade-down'  /><span className="contact-text phone"><a href="tel:9693480133" title="Give me a call" data-aos='fade-up'>+91 9693480133</a></span></li>
                    
        </ul>

        <hr></hr>
      
            <HorizontalLine />
        <ul className="social-media-list" data-aos='zoom-in'>
          <li onClick={linkedin}>
          <a href="https://www.linkedin.com/in/akhil-choubey-376887192" className="contact-icon"> 
            <FaLinkedin style={{fontSize: "1.5rem"}} className="fa  "  />
          </a>
          </li>
          <li onClick={github}>
          <a href="https://github.com/AkhilChoubey" className="contact-icon"> 
            <AiFillGithub style={{fontSize: "1.5rem"}} className="fa "/>
            </a>
          </li>
          <li onClick={facebook}>
          <a href="https://www.facebook.com/profile.php?id=100009258792168" className="contact-icon"> 
            <AiFillFacebook style={{fontSize: "1.5rem"}} className="fa " />
            </a>
          </li>
          <li onClick={twitter}>
          <a href="https://twitter.com/AkhilKrChoubey1?s=08" className="contact-icon"> 
            <AiOutlineTwitter style={{fontSize: "1.5rem"}} className="fa S" />
            </a>
          </li>       
        </ul>
        <hr />
        <HorizontalLine />
        <div className="copyright" style={{color: 'white'}}>&copy; AKHIL CHOUBEY</div>

      </div>
    
  </div>
  
</section>  
  
  
    </>
}

export default withRouter(Contact);