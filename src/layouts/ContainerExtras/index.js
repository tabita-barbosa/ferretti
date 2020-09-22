import React from 'react';
import { Col} from 'reactstrap';
import CardExtra from '../../Components/CardExtra';
import Titulo from '../../Components/Titulo';
import data from '../../dados/packExtras.json';

import './styles.css';


const CardsExtra = () => {
    return (
        <div className="container-extra">
            <Col lg="10">
            <Titulo></Titulo>
            </Col>
            <CardExtra>
            </CardExtra>
            <CardExtra>
            </CardExtra>
        </div>
    )
}

export default CardsExtra;