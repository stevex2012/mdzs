import React from 'react';
import Config from './config';
function Index({type}){
    return <div style={{textAlign:'center'}}>{Config[type].desc}</div>
}

export default Index;