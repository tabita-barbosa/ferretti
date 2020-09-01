import React from 'react';
import videoHome from '../../assets/video.MOV';
import './styles.css';

const VideoMO = () => {
    return(
        <>
        <div className="video-container d-flex justify-content-center" >
            <video className="video-content" src={videoHome} height="auto" autoPlay="true" loop="true" muted="true" >
            </video>
        </div>
        </>
    )
}

export default VideoMO;