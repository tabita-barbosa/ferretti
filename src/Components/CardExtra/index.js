import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

const CardExtra = (props) => {
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
                    </ul>
                </CardText>
                <CardSubtitle className="">
                    {props.valorPack} valor
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default CardExtra;