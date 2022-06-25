import React from 'react';
import './videobox.css'

const VideoBox = ({vid}) => {

  

    return (
        <div className="videobox">
        <iframe 
        src={vid} title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
        </div>
    )
}

export default VideoBox;