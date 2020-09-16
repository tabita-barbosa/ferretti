import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';
import BotaoCompra from '../../actions/BotaoCompra'
import './styles.css';

// const slides = data.map((depos) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//       >
//         <p className="text-center">{depos.text}</p>
//         <p className="text-center font-weight-bold">{depos.author}</p>
//       </CarouselItem>
//     );
//   });

const CardsPacotes = (props) => {
    return (
        <Container className="container-all">
            <div className="container-fotos ">
                <Col lg="10">
                    <h1 className="titulo-pack">{props.tituloPack}fotografia</h1>
                </Col>
                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">{props.tituloCard}titulo</CardTitle>
                        <CardText className="">
                            <ul className="card-content">
                                <li>
                                    alo alo
                                    {props.quant}
                                </li>
                                <li> alo alo
                                    {props.make}
                                </li>
                                <li> alo alo
                                    {props.tempo}
                                </li>
                                <li> alo alo
                                    {props.fotoUnitaria}
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            {props.valorPack} valor
                        </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>

                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">{props.tituloCard}</CardTitle>
                        <CardText>
                            <ul className="card-content">
                                <li>
                                    {props.quant}
                                </li>
                                <li>
                                    {props.make}
                                </li>
                                <li>
                                    {props.tempo}
                                </li>
                                <li>
                                    {props.fotoUnitaria}
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            {props.valorPack}
                        </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>

                <Card className="text-center">
                    <CardBody>
                        <CardTitle className="text-uppercase">
                            {props.tituloCard}
                        </CardTitle>
                        <CardText>
                            <ul className="card-content">
                                <li>
                                    {props.quant}
                                </li>
                                <li>
                                    {props.make}
                                </li>
                                <li>
                                    {props.tempo}
                                </li>
                                <li>
                                    {props.fotoUnitaria}
                                </li>
                            </ul>
                        </CardText>
                        <CardSubtitle className="">
                            {props.valorPack}
                        </CardSubtitle>
                        <BotaoCompra href={props.pagseguro}></BotaoCompra>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )
}

export default CardsPacotes;