import React, {useState} from 'react';
import { Button, Card, CardBody, Collapse, Container } from 'reactstrap';
import Titulo from '../../Components/Titulo';
import './styles.css';

const PerguntasFrequentes = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <section className="container-perguntas">
            <Titulo
                titulos="PERGUNTAS FREQUENTES"
            >
            </Titulo>
            <div className="div-pergunta">
            <Button className="botao-pergunta" color="white" onClick={toggle}>PERGUNTA 1</Button>
            <Collapse isOpen={isOpen}>
                <Card className="card-pergunta">
                    <CardBody>
                        Lorem lorem lorem lorem lorem lorem ipsum
                    </CardBody>
                </Card>
            </Collapse>
            </div>
        </section>
    )

}

export default PerguntasFrequentes;
