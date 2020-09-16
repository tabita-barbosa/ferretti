import React, {Component} from 'react';
import CardsPacotes from '../../Components/CardsPacotes';
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
        </>
        );
    }
}

export default Pacotes;