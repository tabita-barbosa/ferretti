import React, { useState } from 'react';
import { NavItem, NavLink, Navbar, Nav, Collapse, NavbarToggler, NavbarBrand, Container } from "reactstrap";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import Quinhentos from '../../icons/500px-brands.svg';
import Twitter from '../../icons/twitter-brands.svg';
import Instagram from '../../icons/instagram-brands.svg';
import Facebook from '../../icons/facebook-f-brands.svg';
import Logo from '../../assets/logo-provisorio.png';

const MenuLateral = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <Router>
            <Container className="container-nav d-flex flex-column">
                <div className="div-menu">
                    <NavbarBrand>
                        <img className="logo-imagem" alt="Gui Ferretti logo" src={Logo}></img>
                    </NavbarBrand>
                    <Navbar light className="" expand="sm">
                        <NavbarToggler className="botao-menu" onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav vertical className="d-flex justify-content-start" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Home
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Portfólio
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Pacotes
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Equipe
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Parceiros
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Contato
                            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/"}>
                                        Login
                            </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div className=" div-icones d-flex justify-content-start">
                    <a href="https://www.instagram.com/guiferretti/">
                        <img alt="icone do instagram" className="icones" src={Instagram}></img>
                    </a>
                    <a href="https://500px.com/guiferretti">
                        <img alt="icone do 500px" className="icones" src={Quinhentos}></img>
                    </a>
                    <a href="https://www.facebook.com/GuilhermeFerrettiPhotography">
                        <img alt="icone do facebook" className="icones" src={Facebook}></img>
                    </a>
                    <a href="">
                        <img alt="icone do twitter" className="icones" src={Twitter}></img>
                    </a>
                </div>
            </Container>
        </Router>
    );
}

export default MenuLateral;