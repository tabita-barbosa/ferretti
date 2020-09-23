import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import data from '../../dados/packExtras.json';
import './styles.css';

const CardExtra = (props) => {
    const extras = data.map((extra) => {
        return (
            <>
                <Card className="card-extra">
                    <CardBody>
                        <CardTitle className="text-uppercase">Fotos</CardTitle>
                        <CardText className="">
                            <ul className="card-content">
                                <li>
                                    {extra.tipoFoto1}
                                </li>
                                <li className="font-weight-bold">
                                    {extra.valor1}
                                </li>
                                <li>
                                    {extra.tipoFoto2}
                                </li>
                                <li className="font-weight-bold">
                                    {extra.valor2}
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle className="text-uppercase">Filmes</CardTitle>
                        <CardText className="">
                            <ul className="card-content">
                                <li>
                                    {extra.tipoFilme1} <b>{extra.valor3}</b>
                                </li>
                                <li>
                                    {extra.tipoFilme2} <b>{extra.valor4}</b>
                                </li>
                                <li>
                                    {extra.tipoFilme3} <b>{extra.valor5}</b>
                                </li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </>
        )
    });
    return (
        <>
            {extras}
        </>
    )
}

export default CardExtra;