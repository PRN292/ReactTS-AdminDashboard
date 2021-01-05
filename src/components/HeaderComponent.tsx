import React from "react";
import {Container, Jumbotron, Navbar, NavbarBrand, Row} from "reactstrap";

export default function Header() {
    return (
        <>
            <Navbar dark>
                <Container>
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </Container>
            </Navbar>
            <Jumbotron>
                <Container>
                    <Row className="row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    );
}
