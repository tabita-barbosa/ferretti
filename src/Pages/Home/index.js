import React, { Component } from 'react';
import { Container } from 'reactstrap';
import VideoMO from '../../Components/Video';
import CarouselDepos from '../../Components/CarouselDepos';
import './styles.css';


class Home extends Component {
    constructor(){
        super();
        this.state= {

        }
    }
    render(){
        return(
            <Container className="container-home">
             <div className="div-video">
                <VideoMO>
                </VideoMO>
            </div>
            {/*
            <div className="div-carrousel">
                <CarouselDepos>
                </CarouselDepos>
            </div> */}
            </Container>
        );
    }
}

export default Home;