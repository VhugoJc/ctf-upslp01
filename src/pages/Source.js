import React, { useEffect } from 'react';
import {getSourcesApi} from '../Api/downloadSources';

const Source = () => {
    useEffect(()=>{
        const getSource = async()=>{
            await getSourcesApi();
        }
        getSource();

    },[])
    return (  
        <h1>Source</h1>
    );
}
 
export default Source;