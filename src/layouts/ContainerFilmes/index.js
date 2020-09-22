import React from 'react';
import { Col, Container } from 'reactstrap';
import CardFilme from '../../Components/CardFilme';
import Titulo from '../../Components/Titulo';
import infos from '../../dados/packFotografia.json';
import './styles.css';

const ContainerFilmes = () => {
    return (
        < Container className="container-all" >
            <section className="container-filmes">
                <Col lg="10">
                    <Titulo
                        tituloPack="FILMES">
                    </Titulo>
                </Col>
                <CardFilme></CardFilme>
            </section>
        </Container >
    )
}

export default ContainerFilmes;