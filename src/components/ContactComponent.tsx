import React, {useCallback, useReducer, useState} from "react";
import { Link } from "react-router-dom";
import {Breadcrumb, BreadcrumbItem, Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";

const complexStateInitial = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "",
    message: ""
};

class Touched {
    firstname: boolean = false;
    lastname: boolean = false;
    telnum: boolean = false;
    email: boolean = false;

}

export default function Contact() {
    const [touched, setTouched] = useState<Touched>(new Touched());

    const [statesManager, setStatesManager] = useState(complexStateInitial);
    const onChangeUseState = (e: any) => {
        const { name, value } = e.target;
        setStatesManager((prevState) =>
            ({ ...prevState, [name]: value }));
    };

    const handleBlur = (field: any) => (evt: any) => {

        setTouched({ ...touched, [field]: true });
        console.log(errors);
    };

    function validate(firstname: string, lastname: string, telnum: string, email: string) {
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
        };
        if (touched.firstname && firstname.length < 3) {
            errors.firstname = "First name should be >= 3 characters";
        } else if (touched.firstname && firstname.length > 10) {
            errors.firstname = "First name should be <= 10 characters.";
        }

        if (touched.lastname && lastname.length < 3) {
            errors.lastname = "Last name should be >= 3 characters";
        } else if (touched.lastname && lastname.length > 10) {
            errors.lastname = "Last name should be <= 10 characters.";
        }
        const reg: RegExp = /^\d+$/;
        if (touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. Number should only contains numbers.";
        }

        if (touched.email && email.split("").filter(x => x === '@').length !== 1) {
            errors.email = "Email should contain a @";
        }
        return errors;
    }

    const errors = validate(statesManager.firstname, statesManager.lastname, statesManager.telnum, statesManager.email);

    const handleSubmit = (event: any) => {
        console.log(
            `Current State is: ` +
                statesManager.firstname +
                `, ` +
                statesManager.lastname +
                `, ` +
                statesManager.telnum +
                `, ` +
                statesManager.email +
                `, ` +
                statesManager.agree +
                `, ` +
                statesManager.contactType +
                `, ` +
                statesManager.message +
                `, `
        );
        event.preventDefault();
    };

    return (
        <div className="container">
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </Row>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road
                        <br />
                        Clear Water Bay, Kowloon
                        <br />
                        HONG KONG
                        <br />
                        <i className="fa fa-phone" />: +852 1234 5678
                        <br />
                        <i className="fa fa-fax" />: +852 8765 4321
                        <br />
                        <i className="fa fa-envelope" />: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678">
                            <i className="fa fa-phone" /> Call
                        </a>
                        <a role="button" className="btn btn-info">
                            <i className="fa fa-skype" /> Skype
                        </a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                            <i className="fa fa-envelope-o" /> Email
                        </a>
                    </div>
                </div>
            </div>
            <Row className="row-content">
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    onChange={onChangeUseState}
                                    onBlur={handleBlur("firstname")}
                                    placeholder="First Name"
                                    value={statesManager.firstname}
                                    valid={errors.firstname === ""}
                                    invalid={errors.firstname !== ""}
                                />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    onChange={onChangeUseState}
                                    onBlur={handleBlur("lastname")}
                                    placeholder="Last Name"
                                    valid={errors.lastname === ""}
                                    invalid={errors.lastname !== ""}
                                    value={statesManager.lastname}
                                />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>
                                Contact Tel.
                            </Label>
                            <Col md={10}>
                                <Input
                                    type="tel"
                                    id="telnum"
                                    name="telnum"
                                    onChange={onChangeUseState}
                                    onBlur={handleBlur("telnum")}
                                    placeholder="Tel. Number"
                                    valid={errors.telnum === ""}
                                    invalid={errors.telnum !== ""}
                                    value={statesManager.telnum}
                                />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>
                                Email
                            </Label>
                            <Col md={10}>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={onChangeUseState}
                                    onBlur={handleBlur("email")}
                                    placeholder="Email"
                                    valid={errors.email === ""}
                                    invalid={errors.email !== ""}
                                    value={statesManager.email}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={statesManager.agree} onChange={onChangeUseState} />{" "}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType" value={statesManager.contactType} onChange={onChangeUseState}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>
                                Your Feedback
                            </Label>
                            <Col md={10}>
                                <Input
                                    type="textarea"
                                    id="message"
                                    name="message"
                                    rows={12}
                                    value={statesManager.message}
                                    onChange={onChangeUseState}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </Row>
        </div>
    );
}
