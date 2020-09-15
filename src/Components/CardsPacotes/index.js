import React from 'react';
import { Row, Col, CardHeader, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import BotaoCompra from '../../actions/BotaoCompra'
import './styles.css';

const CardsPacotes = (props) => {
    return (
        <Container className="container-all">
            <div className="container-fotos">
                <Col lg="10">
                    <h1 className="titulo-pack"> FOTOS</h1>
                </Col>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">PACK 1 title</CardTitle>
                        <CardText className="">
                            <ul className="card-content">
                                <li>
                                    15 fotos
                                </li>
                                <li>
                                    Make
                                </li>
                                <li>
                                    1 hora
                                </li>
                                <li>
                                    Foto avulsa R$ 80
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            Investimento R$ 850
                            </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>

                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">PACK 1 title</CardTitle>
                        <CardText>
                            <ul className="card-content">
                                <li>
                                    15 fotos
                                </li>
                                <li>
                                    Make
                                </li>
                                <li>
                                    1 hora
                                </li>
                                <li>
                                    Foto avulsa R$ 80
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            Investimento R$ 850
                            </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>

                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">
                            PACK 1 title
                            </CardTitle>
                        <CardText>
                            <ul className="card-content">
                                <li>
                                    15 fotos
                                </li>
                                <li>
                                    Make
                                </li>
                                <li>
                                    1 hora
                                </li>
                                <li>
                                    Foto avulsa R$ 80
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            Investimento R$ 850
                            </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )
}

export default CardsPacotes;