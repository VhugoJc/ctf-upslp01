import React from 'react';
import {getSourcesApi} from '../Api/downloadSources';
import {Link} from 'react-router-dom';
import calaca from '../assets/img/0edb44b90b82e348b9233038260323e0.gif';

const Source = () => {
    const getSource = async()=>{
        await getSourcesApi();
    }

    return (
        <div style={{textAlign:"center"}}>  
        <h1>🏴‍☠️🏴‍☠️Felicidades, Encontraste tu pista🏴‍☠️🏴‍☠️</h1>
        <Link to="" onClick={getSource}>Ver mi pista    💀</Link>
        <div className="skulls">
            <img  src={calaca} alt=""/>
        </div>
        </div>
    );
}
 
export default Source;