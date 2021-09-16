import React from 'react';
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import { withRouter } from 'react-router';
import {ImHtmlFive} from 'react-icons/im';
import {SiCss3} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiJquery} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {GrReactjs} from 'react-icons/gr';
import {DiNodejsSmall} from 'react-icons/di';
import {SiCplusplus} from 'react-icons/si';
import {BsBootstrap} from 'react-icons/bs';
import {SiRedux} from 'react-icons/si';
import {GiBrain} from 'react-icons/gi';
import {FaGitAlt} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';
const Skills = () => {

    const options = {
		size: 280,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 5,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}


  
    return <>
    <h1 className='component-heading' > Skills </h1>
    <BubbleUI options={options} className="myBubbleUI" >
    <div className='child' style={{backgroundColor: '#ed1c24d0'}}>
        <ImHtmlFive className='icon' />
	    <h1>HTML</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 143, 254, 0.816)'}}>
        <SiCss3 className='icon' />
		<h1>CSS</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 0, 58, 0.816)',color: 'white'}}>
        <SiJavascript className='icon' />
		<h1>JavaScript</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(161, 0, 255, 0.816)'}}>
        <SiJquery className='icon' />
		<h1>JQuery</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 0, 0, 0.816)', color: 'white'}}>
        <FaNodeJs className='icon' />
		<h1>NodeJS</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
        <FaNodeJs className='icon' />
		<h1>ExpressJS</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 149, 57, 0.816)'}}>
        <DiMongodb className='icon' />
		<h1>MongoDB</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
        <GrMysql className='icon' />
        <h1>MySQL</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 40, 152, 0.816)', color: 'white'}}>
        <GrReactjs className='icon' />
		<h1>ReactJS</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(71, 67, 62, 0.816)'}}>
        <DiNodejsSmall className='icon' />
        <h1>EJS</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 134, 118, 0.816)'}}>
        <SiCplusplus className='icon' />
        <h1>C++</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(255, 102, 30, 0.816)'}}>
        <BsBootstrap className='icon' />
        <h1>Bootstrap</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(0, 66, 106, 0.816)'}}>
        <SiRedux className='icon' />
        <h1>Redux</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
        <GiBrain className='icon' />
        <h1>Marketing</h1>
    </div>
    <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
        <FaGitAlt className='icon' />
        <h1>Git</h1>
    </div>
	</BubbleUI>
    </>
}

export default withRouter(Skills);