import React from 'react';
import { Col, Container } from 'reactstrap';
import CardProd from '../../Components/CardProd';
import Titulo from '../../Components/Titulo';
import infos from '../../dados/packFotografia.json';
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

// const CardsPacotes = infos.map(pack => 
//         <CardProd
//         titulo={pack.tituloCard}
//         >

//         </CardProd>
//     )
// })
const CardsPacotes = () => {
    return (
        < Container className = "container-all" >
        <section className="container-pacotes">
            <Col lg="10">
                <Titulo
                    tituloPack="fotografia">
                </Titulo>
            </Col>
            <CardProd
            // tituloCard={pack.packNome}
            // quant={pack.quantFotos}
            // make={pack.make}
            // tempo={pack.tempo}
            // fotoUnitaria={pack.fotoAvulsa}
            // valorPack={pack.valor}
            >
            </CardProd>
            <CardProd>

            </CardProd>
            <CardProd>

            </CardProd>

        </section>

    <section className="container-pacotes">
                <Col lg="10">
                    <Titulo
                        tituloPack="FILME">
                    </Titulo>
                </Col>
                <CardProd>

                </CardProd>
                <CardProd>

                </CardProd>
                <CardProd>

                </CardProd>
            </section>
        </Container >
    )
}

export default CardsPacotes;