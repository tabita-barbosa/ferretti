import React from 'react';
import {Accordion, Toggle, AccordionCollapse, Card, Header } from 'react-bootstrap';
import './styles.css';

const PerguntasFrequentes = () => {
    return (
        <Accordion>
            <h3 className="titulo-acordeao">PERGUNTAS FREQUENTES</h3>
            <Card className="card-acordeao">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="card-acordeao">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )

}

export default PerguntasFrequentes;
