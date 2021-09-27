import React from 'react';
import ProjectCards from './ProjectCards';


const Projects = () => {
    return <>
     <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" style={{marginTop: '3rem', width: '100%'}} >
                    <div className="row gy-4">  
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
         </div>
        </div>
        </div>
        </div>

    </>
}

export default Projects;