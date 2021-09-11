import React from 'react';
import Card from './Card';


const Academics = () => {
    return <>
    <h1 style={{textAlign: 'center', fontWeight: 'bolder', fontSize: '4rem'}}>Academics</h1>
        <div style={{display:'flex',fontWeight:'bolder',height:'20rem'}}>
            
            <Card key='1' title='10th' time='2016-17' institute='ABPS, Rehla' value='90'/>
            <Card key='2' title='12th' time='2017-19' institute='ABPS, Rehla' value='86.2'/>
            <Card key='3' title='Graduation' time='2019-23' institute='Lovely Professional University' value='87.9'/>
        </div>
    </>
}

export default Academics;