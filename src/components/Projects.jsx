import React from 'react';
import ProjectCards from './ProjectCards';


const Projects = () => {
    return <>
     <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" style={{marginTop: '3rem', width: '100%'}} >
                    <div className="row gy-4">  
        <ProjectCards key='1' title='Weather App' image='' link='https://akhilweather.herokuapp.com/' />
        <ProjectCards key='2' title='warta chatting app' image='' link='https://akhil-warta.netlify.app/' />
        <ProjectCards key='3' title='recipebook' image='' link='https://akhilrecipeapp.netlify.app/' />
        <ProjectCards key='4' title='portfolio' image='' link='https://akhilportfolio007.netlify.app/' />
        <ProjectCards key='5' title='playmusic' image='' link='https://akhilchoubey.github.io/playMusic/' />
        <ProjectCards key='6' title='to-do-list' image='' link='https://github.com/AkhilChoubey/To-Do-List' />
        <ProjectCards key='7' title='Indian TOURISM' image='' link='https://akhilchoubey.github.io/India-Tourism/' />
        <ProjectCards key='8' title='IMAGE RESIZER' image='' link='https://akhilchoubey.github.io/imageResize/' />
         </div>
        </div>
        </div>
        </div>

    </>
}

export default Projects;