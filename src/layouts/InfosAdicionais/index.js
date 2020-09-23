import React from 'react';
// import { Container } from 'reactstrap';
import Titulo from '../../Components/Titulo';
import './styles.css';

const InfosAdicionas = () => {
    return (

        <section className="container-infos">
            <Titulo
            titulos="Informações adicionais"
            ></Titulo>
            <div className="div-texto">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque mi non tincidunt egestas. Vivamus quis nibh at justo mollis hendrerit et ut elit. Aliquam molestie aliquet venenatis. Suspendisse at quam tempus velit egestas interdum. Nulla et est non eros cursus accumsan ut id justo. Donec consequat, magna sit amet viverra efficitur, dui elit tincidunt sem, sit amet venenatis justo sapien ut magna. Morbi nec lacus id felis egestas porta non vitae nulla. Mauris imperdiet gravida varius. Morbi dapibus tristique urna eu hendrerit. Aenean vitae hendrerit dui, vitae dapibus est. Donec nec scelerisque orci. Sed nec quam metus. In eget ultricies erat.
            </p>
            </div>
        </section>

    )
}

export default InfosAdicionas;