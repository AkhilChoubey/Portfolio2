import React from 'react';
import './Project.css';
import img from './profile.jpg';
const ProjectCards = () => {
    return <>
        <div className="col-md-4 col-10 mx-auto" >
        <div className="container1">
	        <div className="box">
		        <div className="imgBx">
			        <img src={img} />
		        </div>
		        <div className="content"><h2>New Project</h2> </div>
	        </div>
        </div>
        </div>
        
    </>
}

export default ProjectCards;