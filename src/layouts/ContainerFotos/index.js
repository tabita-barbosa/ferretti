import React from 'react';
import { Col, Container } from 'reactstrap';
import CardFotografia from '../../Components/CardFotografia';
import Titulo from '../../Components/Titulo';
import infos from '../../dados/packFotografia.json';
import './styles.css';

const CardsPacotes = () => {
    return (
        < Container className="container-all" >
            <section className="container-pacotes">
                <Col lg="10">
                    <Titulo
                        tituloPack="fotografia">
                    </Titulo>
                </Col>
                <CardFotografia>
                </CardFotografia>
            </section>
        </Container >
    )
}

export default CardsPacotes;