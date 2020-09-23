import React from 'react';
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import Titulo from '../../Components/Titulo';
import './styles.css';

const PerguntasFrequentes = (props) => {

    return (
        <section className="container-perguntas">
            <Titulo
                titulos="PERGUNTAS FREQUENTES"
            >
            </Titulo>
            <Button color="white" id="toggler">PERGUNTA 1</Button>
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    <CardBody>
                        Lorem lorem lorem lorem lorem lorem ipsum
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </section>
    )

}

export default PerguntasFrequentes;
