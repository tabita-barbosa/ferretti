import React, { Component } from 'react';
import ContainerFotos from '../../layouts/ContainerFotos';
import ContainerFilmes from '../../layouts/ContainerFilmes';
import ContainerExtras from '../../layouts/ContainerExtras';
import PerguntasFrequentes from '../../layouts/PerguntasFrequentes';
import InfosAdicionas from '../../layouts/InfosAdicionais';
import './styles.css';

class Pacotes extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <>
                <ContainerFotos>
                </ContainerFotos>

                <ContainerFilmes>
                </ContainerFilmes>

                <ContainerExtras>
                </ContainerExtras>

                <InfosAdicionas>
                </InfosAdicionas>

                <PerguntasFrequentes>
                </PerguntasFrequentes>
            </>
        );
    }
}

export default Pacotes;