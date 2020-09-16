import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import BotaoCompra from '../../actions/BotaoCompra';
import './styles.css';

const CardProd = (props) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle className="text-uppercase">{props.tituloCard}</CardTitle>
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
    )
}

export default CardProd;