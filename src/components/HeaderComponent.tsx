import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
    Jumbotron,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";

export default class Header extends React.Component<any, any> {
    private username!: HTMLInputElement | HTMLTextAreaElement | null;
    private remember!: HTMLInputElement | HTMLTextAreaElement | null;
    private password!: HTMLInputElement | HTMLTextAreaElement | null;

    constructor(props: any) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event: any) {
        this.toggleModal();
        event.preventDefault();
        // @ts-ignore
        const username = this.username.value;

        //console.log(`Username: ${this.username.value}, Password: ${this.password.value}, Remember: ${this.remember.value}`);
    }

    render() {

        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
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
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg" /> Login
                                    </Button>
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
                                <p>
                                    We take inspiration from the World's best cuisines, and create a unique fusion
                                    experience. Our lipsmacking creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={(input) => (this.username = input)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={(input) => (this.password = input)}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" id="remember"
                                        innerRef={(input) => (this.remember = input)}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

