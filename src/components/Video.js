import React from 'react';
import backgroundVideo from '../assets/video/Blank VHS Tape Footage.mp4';
import audio from '../assets/audio/videoplayback.mp3';


const Video = () => {
    return (  
        <>
        <audio src={audio} autoPlay loop />
        <video autoPlay loop muted className="video-background">
                <source src={backgroundVideo} type="video/mp4"/>
        </video>
        </>
    );
}
 
export default Video;