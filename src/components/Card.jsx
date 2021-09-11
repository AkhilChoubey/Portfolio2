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
                    <Grades value={props.value}/>
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Time period : {props.time} minutes</p>
                            <p className="card-text">Intitute : {props.institute} kcal</p>
                            {/* <p className="card-text"> : {props.fat} g</p> */}
                       </div>
                </div>
            </div>
                   
        </>
    );
};

export default Card  ;