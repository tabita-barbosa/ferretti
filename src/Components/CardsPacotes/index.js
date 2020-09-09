import React from 'react';
import { Row, Col, CardHeader, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import './styles.css';

const CardsPacotes = () => {
    return (
        <Container className="container-fotos">
            <Row className="linha-fotos">
                <Col sm="4">
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle className="text-uppercase">PACK 1 title</CardTitle>
                            <CardText className="">
                            <p>- 15 fotos
                            </p>
                            <p>- Make
                            </p>
                            <p>- 1 hora
                            </p>
                            <p>- Foto avulsa R$ 80
                            </p>
                            </CardText>
                            <CardSubtitle className="text-weight-bold">
                                Investimento R$ 850
                            </CardSubtitle>
                            <Button href="/">Contratar</Button>
                        </CardBody>
                    </Card>
                </Col>
                
                <Col sm="4">
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle className="text-uppercase">PACK 1 title</CardTitle>
                            <CardText>
                            <p>- 15 fotos
                            </p>
                            <p>- Make
                            </p>
                            <p>- 1 hora
                            </p>
                            <p>- Foto avulsa R$ 80
                            </p>
                            </CardText>
                            <CardSubtitle className="text-weight-bold">
                                Investimento R$ 850
                            </CardSubtitle>
                            <Button href="/">Contratar</Button>
                        </CardBody>
                    </Card>
                </Col>
                
                <Col sm="4">
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle className="text-uppercase">
                                PACK 1 title
                            </CardTitle>
                            <CardText>
                            <p>- 15 fotos
                            </p>
                            <p>- Make
                            </p>
                            <p>- 1 hora
                            </p>
                            <p>- Foto avulsa R$ 80
                            </p>
                            </CardText>
                            <CardSubtitle className="text-weight-bold">
                                Investimento R$ 850
                            </CardSubtitle>
                            <Button className="botao-compra" href="/">Contratar</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardsPacotes;