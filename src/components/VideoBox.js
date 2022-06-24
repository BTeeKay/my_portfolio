import React from 'react';
import './videobox.css'

const VideoBox = () => {

    return (
        <div className="videobox">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/ikI-wtaUakM" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
        </div>
    )
}

export default VideoBox;