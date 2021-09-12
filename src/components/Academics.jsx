import React from 'react';
import Card from './Card';


const Academics = () => {
    return <>
    <h1 className='component-heading' >Academics</h1>
        <div style={{fontWeight:'bolder', minHeight :'30rem'}}>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" style={{marginTop: '3rem', width: '100%'}} >
                    <div className="row gy-4">   
            <Card key='1' title='10th' time='2016-17' institute='ABPS, Rehla' value='90'  />
            <Card key='2' title='12th' time='2017-19' institute='ABPS, Rehla' value='86.2'/>
            <Card key='3' title='Graduation' time='2019-23' institute='Lovely Professional University' value='87.9'/>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
}

export default Academics;