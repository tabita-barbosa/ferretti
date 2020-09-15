import React from 'react';
import './styles.css';

const BotaoCompra = (props) => {
    return(
        <button 
        href={props.pagseguro}
        className="botao-compra">
            Contratar
        </button>
    )
}

export default BotaoCompra;