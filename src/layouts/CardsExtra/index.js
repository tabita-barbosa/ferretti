import React from 'react';
import { Col} from 'reactstrap';
import CardProd from '../../Components/CardProd';
import Titulo from '../../Components/Titulo';
import data from '../../dados/packExtras.json';

import './styles.css';


const CardsExtra = (props) => {
    return (
        <div className="container-extra">
            <Col lg="10">
            <Titulo></Titulo>
            </Col>
            <CardProd
            
            >
            </CardProd>
            <CardProd>

            </CardProd>
        </div>
    )
}

export default CardsExtra;