import React from 'react';
import './Project.css';
import img from './profile.jpg';
import {BsBoxArrowUpRight} from 'react-icons/bs';

const ProjectCards = (props) => {
    return <>
        <div className="col-md-4 col-10 mx-auto" >
        <div className="container1">
	        <div className="box">
		        <div className="imgBx">
			        <img src={img} /> 
                    {/* <img src={props.image} /> */}
		        </div>
		        <div className="content"><a href={props.link} style={{textDecoration:'none'}}><h2>{props.title} <BsBoxArrowUpRight/> </h2> </a> </div>
	        </div>
        </div>
        </div>
        
    </>
}

export default ProjectCards;