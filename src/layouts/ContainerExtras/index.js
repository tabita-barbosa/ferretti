import React from 'react';
import { Col, Container } from 'reactstrap';
import CardExtra from '../../Components/CardExtra';
import Titulo from '../../Components/Titulo';

import './styles.css';


const CardsExtra = () => {
    return (
        <Container className="container-all-extra">
        <section className="container-extra">
            <Col lg="10">
            <Titulo titulos="EXTRAS"></Titulo>
            </Col>
            <CardExtra>
            </CardExtra>
        </section>
        </Container>
    )
}

export default CardsExtra;