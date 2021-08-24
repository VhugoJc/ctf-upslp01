import React from 'react';
import UseAuth from '../hooks/useAuth';
import meme from '../assets/img/meme-upslp.jpg';

const Home = () => {
    const {id} = UseAuth();
    
    return (  
        <>
            {   id!==""
                ?<ContentHome id={id}/>
                :window.location.href = "/"
            }
        </>
    );
}
 
export default Home;

export function ContentHome({id}){
    return(
        <>
            <h1 className="App-header">Bienvenido {id}</h1>
            <img src={meme} alt="meme polimemes" className="home-img_meme"/>
        </>
    );
}