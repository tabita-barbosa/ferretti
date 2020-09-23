import React from 'react';
import GuiFerretti from '../../assets/gui-ferretti.jpg';
import './styles.css';

const ContainerEquipe = () =>{
    return(
        <>
        <section className="container-equipe">
            <img className="img-equipe" src={GuiFerretti}></img>
            <div className="div-bio">
            <h3 className="nome-equipe"></h3>
            <p className="bio-equipe">
            Ut quis purus at ipsum aliquet rutrum. Orci varius natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Curabitur vulputate pretium velit quis scelerisque. Duis pharetra dui quis ligula 
            ullamcorper, eget pharetra sem hendrerit. Vivamus lacus felis, condimentum sit amet accumsan vel, tempus eget 
            magna. Curabitur feugiat metus arcu, et mollis felis malesuada nec. Integer ornare id diam id dictum. Donec 
            in mauris ex. Nullam a tellus id magna sagittis tincidunt. Praesent ac facilisis sapien. Phasellus dapibus, 
            mi a pretium molestie, tellus lectus lacinia risus, sed fringilla urna dui sit amet velit.
            </p>
            <div className="redes-equipe"></div>
            </div>
        </section>
        </>
    )
}

export default ContainerEquipe;