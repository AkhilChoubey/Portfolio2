import React ,{useEffect} from 'react';
import {Link} from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Grades from './Grades';
const Card= (props)=>{

    // 
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="col-md-4 col-10 mx-auto" >
                <div className="card" style={{ boxShadow: "0 8px 8px -4px lightblue"}} data-aos='fade-up'>
                <div className="card-body">
                    {/* <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} /> */}
                    <Grades value={props.value} />
                            <h1 className="card-title font-weight-bold" style={{textAlign: 'center',fontWeight:'bolder'}}>{props.title}</h1>
                            <h4 className="card-text" style={{textAlign: 'center'}}>Time period : {props.time}</h4>
                            <h5 className="card-text" style={{textAlign: 'center'}}>Intitute : {props.institute}</h5>
                            {/* <p className="card-text"> : {props.fat} g</p> */}
                       </div>
                </div>
            </div>
                   
        </>
    );
};

export default Card  ;