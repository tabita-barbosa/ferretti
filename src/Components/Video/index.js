import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import videoHome from '../../assets/video.MOV';
import './styles.css';

const VideoMO = () => {
    return(
        <Container>
            <Row >
                <Col className="video-container">
                    <video className="video-content" src={videoHome} height="auto" autoPlay="true" loop="true" muted="true" >
                    </video>
                </Col>
            </Row>
        </Container>
    )
}

export default VideoMO;