import React from 'react';
import ProjectCards from './ProjectCards';
import weather from './images/weather.jpg';
import chat from './images/chat.jpg';
import recipe from './images/recipe.jpg';
import profile from './profile.jpg';
import music from './images/music.jpg';
import todolist from './images/to-do-list.jpg';
import tourism from './images/tourism.jpg';
import imageResizer from './images/imageResize.svg';

const Projects = () => {
    return <>
     <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" style={{marginTop: '3rem', width: '100%'}} >
                    <div className="row gy-4">  
        <ProjectCards key='1' title='Weather App' image={weather} link='https://akhilweather.herokuapp.com/' />
        <ProjectCards key='2' title='warta chatting app' image={chat} link='https://akhil-warta.netlify.app/' />
        <ProjectCards key='3' title='recipebook' image={recipe} link='https://akhilrecipeapp.netlify.app/' />
        <ProjectCards key='4' title='portfolio' image={profile} link='https://akhilportfolio007.netlify.app/' />
        <ProjectCards key='5' title='playmusic' image={music} link='https://akhilchoubey.github.io/playMusic/' />
        <ProjectCards key='6' title='to-do-list' image={todolist} link='https://github.com/AkhilChoubey/To-Do-List' />
        <ProjectCards key='7' title='Indian TOURISM' image={tourism} link='https://akhilchoubey.github.io/India-Tourism/' />
        <ProjectCards key='8' title='IMAGE RESIZER' image={imageResizer} link='https://akhilchoubey.github.io/imageResize/' />
         </div>
        </div>
        </div>
        </div>

    </>
}

export default Projects;