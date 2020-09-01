import React, { Component } from 'react';
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
            <div className="div-video">
                <VideoMO>
                </VideoMO>
            </div>
            <div className="div-carrousel">
                <CarouselDepos>
                </CarouselDepos>
            </div>
            </>
        );
    }
}

export default Home;