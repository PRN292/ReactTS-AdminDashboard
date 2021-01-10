import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Jumbotron,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";

export default function Header() {
    const [isNavOpen, setNavOpen] = useState(false);
    function toggleNav() {
        setNavOpen(!isNavOpen);
    }
    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg" /> Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg" /> About Us
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg" /> Menu
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg" /> Contact Us
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}
