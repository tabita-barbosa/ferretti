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
            <>
            <div>
                <VideoMO>
                </VideoMO>
            </div>
            <div>
                <CarouselDepos>
                </CarouselDepos>
            </div>
            </>
        );
    }
}

export default Home;