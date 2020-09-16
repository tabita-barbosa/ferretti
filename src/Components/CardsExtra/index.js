import React from 'react';
import { Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';
import './styles.css';


const CardsExtra = (props) => {
    return (
        <div className="container-extra">
            <Col lg="10">
                <h2 className="titulo-pack-extra">{props.tituloPack}EXTRAS</h2>
            </Col>
            <Card className="text-center">
                <CardBody>
                    <CardTitle className="text-uppercase">{props.tituloCard}titulo</CardTitle>
                    <CardText className="card-extra">
                        <ul className="card-content">
                            <li>
                                alo alo
                                    {props.quant}
                            </li>
                            <li> alo alo
                                    {props.make}
                            </li>
                        </ul>
                    </CardText>
                    <CardSubtitle className="">
                        {props.valorPack} valor
                    </CardSubtitle>
                </CardBody>
            </Card>
            <Card className="text-center">
                <CardBody>
                    <CardTitle className="text-uppercase">{props.tituloCard}titulo</CardTitle>
                    <CardText className="card-extra">
                        <ul className="card-content">
                            <li>
                                alo alo
                                    {props.quant}
                            </li>
                            <li> alo alo
                                    {props.make}
                            </li>
                        </ul>
                    </CardText>
                    <CardSubtitle className="">
                        {props.valorPack} valor
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardsExtra;