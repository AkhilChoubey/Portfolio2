import React from 'react';
import newbg from './profile.jpg';



const Home = () => {

return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${newbg})`, backgroundAttachment: "fixed",backgroundRepeat: "no-repeat"}} >
    
    {/* <h1> {props.location.state.details.first_name}</h1> */}
    <section id="header" className="d-flex align-items-center">
    <div id="title" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" >
                <h1>Welcome to the world of <strong className="brand-name"> 
                <Typewriter options={{  strings: ["Recipes", "Magic", "Taste"],  autoStart: true,  loop: true,changeDelay:2 }}/>

              </strong>
               </h1>
               <h2 className="my-3" style={{color:"white"}}>
               <Typewriter options={{  strings: ['Search for your favourite food', "Let's surprise others with our cooking talent"],  autoStart: true,  loop: true,changeDelay:2 }}/>
               </h2>
                
                <div className="mt-3">
                    <Link to='/meal' className="btn-get-started ">MealMaker</Link>
                    <Link to='/healthy' className="btn-get-started " style={{marginLeft: "5%"}}>Healthy</Link>
                </div>
                </div>
        </section>
    </div>
}

export default Home;
