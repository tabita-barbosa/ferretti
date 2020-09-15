import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import videoHome from '../../assets/video.MOV';
import './styles.css';

const VideoMO = () => {
    return (
            <Col sm="10" className="video-container d-flex">
                <video className="video-content" src={videoHome} height="auto" autoPlay="true" loop="true" muted="true" >
                </video>
            </Col>
    )
}

export default VideoMO;