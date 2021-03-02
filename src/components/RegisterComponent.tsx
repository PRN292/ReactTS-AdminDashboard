import React from "react";
import {Card, CardBody, Col, Container, Form, FormGroup, Input, Row} from "reactstrap";

export default function Register() {
    return (
        <Container>
            <Card className="o-hidden border-0 shadow-lg my-5">
                <CardBody className="p-0">
                    <Row>
                        <Col lg={5} className="d-none d-lg-block bg-register-image"></Col>
                        <Col lg={7}>
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <Form className="user">
                                    <FormGroup className="row">
                                        <Col sm={6} className="mb-3 mb-sm-0">
                                            <Input type="text" className="form-control form-control-user"
                                                   id="exampleFirstName"
                                                   placeholder="First Name" />
                                        </Col>
                                        <div className="col-sm-6">
                                            <Input type="text" className="form-control form-control-user"
                                                   id="exampleLastName"
                                                   placeholder="Last Name" />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" className="form-control form-control-user"
                                               id="exampleInputEmail"
                                               placeholder="Email Address" />
                                    </FormGroup>
                                    <FormGroup className="row">
                                        <Col sm={6} className="mb-3 mb-sm-0">
                                            <Input type="password" className="form-control form-control-user"
                                                   id="exampleInputPassword" placeholder="Password" />
                                        </Col>
                                        <Col sm={6}>
                                            <Input type="password" className="form-control form-control-user"
                                                   id="exampleRepeatPassword" placeholder="Repeat Password" />
                                        </Col>
                                    </FormGroup>
                                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <hr/>
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"/> Register with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"/> Register with Facebook
                                        </a>
                                </Form>
                                <hr/>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="login.html">Already have an account? Login!</a>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}
