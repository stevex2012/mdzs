import React from 'react';
import Config from './config';
import AboutDBx from './AboutDBx';
import CompanyNews from './CompanyNews';
import FamilyTool from './FamilyTool';
import Service from './Service';
function Index({type}){
    switch (type) {
        case '0':
            return <AboutDBx />
            break;
        case '1':
            return <CompanyNews />
            break;
        case '2':
            return <Service />
            break;
        default:
            return <FamilyTool />
    }
    return <div style={{textAlign:'center'}}>{Config[type].desc}</div>
}

export default Index;