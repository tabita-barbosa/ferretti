import React, {Component} from 'react';
import CardsPacotes from '../../Components/CardsPacotes';
import CardsExtra from '../../Components/CardsExtra';
import PerguntasFrequentes from '../../Components/PerguntasFrequentes';
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

        <CardsExtra>
        </CardsExtra>

        <PerguntasFrequentes>
        </PerguntasFrequentes>
        </>
        );
    }
}

export default Pacotes;