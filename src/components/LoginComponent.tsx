import React from "react";
import {Card, CardBody, CardImg, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";

export default function Login() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={10} lg={12} md={9}>
                    <Card className="o-hidden border-0 shadow-lg my-5">
                        <CardBody className="p-0">
                            <Row>
                                <Col lg={6} className="d-none d-lg-block">
                                    <CardImg className="img-fluid" src="waren-logo.jpg" alt=""/>
                                </Col>
                                <Col lg={6}>
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <Form className="user">
                                            <FormGroup>
                                                <input type="email" className="form-control form-control-user"
                                                       id="exampleInputEmail" aria-describedby="emailHelp"
                                                       placeholder="Enter Email Address..."/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="password" className="form-control form-control-user"
                                                       id="exampleInputPassword" placeholder="Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <div className="custom-control custom-checkbox small">
                                                    <Input type="checkbox" className="custom-control-input"
                                                           id="customCheck"/>
                                                        <Label className="custom-control-label" htmlFor="customCheck">Remember
                                                            Me</Label>
                                                </div>
                                            </FormGroup>
                                            <a href="index.html" className="btn btn-primary btn-user btn-block">Login</a>
                                            <hr/>
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"/> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"/> Login with Facebook
                                                </a>
                                        </Form>
                                        <hr/>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>);
}
