import React, {Component} from 'react';
import CardsPacotes from '../../layouts/CardsPacotes';
// import CardsExtra from '../../layouts/CardsExtra';
// import PerguntasFrequentes from '../../layouts/PerguntasFrequentes';
import './styles.css';

class Pacotes extends Component {
    constructor(){
        super();
        this.state= {

        }
    }
    render(){
        return(
        <>
        <CardsPacotes >
        </CardsPacotes>

        {/* <CardsExtra>
        </CardsExtra>

        <PerguntasFrequentes>
        </PerguntasFrequentes> */}
        </>
        );
    }
}

export default Pacotes;