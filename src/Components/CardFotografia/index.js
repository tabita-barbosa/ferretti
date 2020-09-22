import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import data from '../../dados/packFotografia.json';
import BotaoCompra from '../../actions/BotaoCompra';
import './styles.css';

const CardFotografia = (props) => {

    const packs = data.map((pacote) => {
        return (
            <Card>
                <CardBody>
                <CardTitle className="text-uppercase">{pacote.packNome}</CardTitle>
                    <CardText className="">
                        <ul className="card-content">
                            <li>
                                {pacote.quantFotos}
                            </li>
                            <li>
                                {pacote.make}
                            </li>
                            <li>
                                {pacote.tempo}
                            </li>
                            <li>
                                {pacote.fotoAvulsa}
                            </li>
                        </ul>
                    </CardText>
                    <CardSubtitle className="">
                        {pacote.valor}
                    </CardSubtitle>
                    <BotaoCompra href={props.pagseguro}></BotaoCompra>
                </CardBody>
            </Card>
        )
    });
    return (
        <>
            {packs}
        </>
    )
}

export default CardFotografia;