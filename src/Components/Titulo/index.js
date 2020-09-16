import React from 'react';
import './styles.css';

const Titulo = (props) => {
    return (
        <h2 className="titulo">{props.tituloPack}</h2>
    )
}

export default Titulo;