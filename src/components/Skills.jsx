import React from 'react';
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
import {ImHtmlFive} from 'react-icons/im';
const Skills = () => {

    const options = {
		size: 180,
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
    <h1> Skills </h1>
    <BubbleUI options={options} className="myBubbleUI">
    <div className='child' style={{backgroundColor: '#ed1c24d0'}}>
    <ImHtmlFive />
		<h1>HTML</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 143, 254, 0.816)'}}>
		<h1>CSS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 0, 58, 0.816)'}}>
		<h1>JS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(161, 0, 255, 0.816)'}}>
		<h1>JQuery</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 0, 0, 0.816)'}}>
		<h1>NodeJS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
		<h1>ExpressJS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 149, 57, 0.816)'}}>
		<h1>MongoDB</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 40, 152, 0.816)'}}>
		<h1>ReactJS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(71, 67, 62, 0.816)'}}>
        <h1>EJS</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 134, 118, 0.816)'}}>
        <h1>C++</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(255, 102, 30, 0.816)'}}>
        <h1>Bootstrap</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(0, 66, 106, 0.816)'}}>
        <h1>Redux</h1>
        </div>
        <div className='child' style={{backgroundColor: 'rgba(237, 28, 36, 0.816)'}}>
        <h1>Marketing</h1>
        </div>
	</BubbleUI>
    </>
}

export default Skills;