import React from 'react';
import { Row, Col, CardHeader, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import './styles.css';

const CardsPacotes = () => {
    return (
        <Container className="container-fotos">
            <h1 className="titulo-pack text-center">FOTOS</h1>
            {/* <Row className="container-fotos"> */}
                <Col className="lg-4">
                    <Card>
                        <CardHeader tag="h3">PACK 1</CardHeader>
                        <CardBody>
                            <CardTitle>PACK 1 title</CardTitle>
                            <CardText>
                                - 15 fotos
                                - Make
                                - 1 hora
                                - Foto avulsa R$ 80
                            </CardText>
                            <CardSubtitle>
                                Investimento R$ 850
                            </CardSubtitle>
                            <Button>Contratar</Button>
                        </CardBody>
                    </Card>
                </Col>
            {/* </Row> */}
        </Container>
    )
}

export default CardsPacotes;