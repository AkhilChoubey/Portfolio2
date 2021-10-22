import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Project.css';
import {BsBoxArrowUpRight} from 'react-icons/bs';

const ProjectCards = (props) => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);


    return <>
        <div className="col-md-4 col-10 mx-auto" data-aos={props.id === '8'?'':'zoom-in'}  style={{zIndex: '50'}}>
        <div>
	        <div className="box">
		        <div className="imgBx">
			        <img src={props.image} alt='Failed to load.' /> 
                   
		        </div>
		        <div className="content"><a href={props.link} style={{textDecoration:'none'}}><h2>{props.title} <BsBoxArrowUpRight/> </h2> </a> </div>
	        </div>
        </div>
        </div>
        
    </>
}

export default ProjectCards;