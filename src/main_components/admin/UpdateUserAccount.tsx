import React from "react";
import {Button, Container, Form, Input, InputGroup, Row} from "reactstrap";

export default class UpdateUser extends React.PureComponent {
    render() {
        return (
            <>
                <Container fluid className="bg-light" style={{ marginTop: 50 }}>
                    <Row>
                        <div className="col-6">
                            <div>
                                <h1 className="text-center text-primary" style={{ marginTop: 50 }}>
                                    Update Known Person Profile
                                </h1>
                                <img
                                    src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png"
                                    className="img-fluid mt-auto"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-thumbnail center-block"
                                alt="default image"
                                height="150"
                                width="150"
                                style={{ marginLeft: 290, marginTop: 50 }}
                            />
                            <Form method="post" id="createNewFrm" className="form">
                                <InputGroup className="mb-3" style={{ marginLeft: 100, marginTop: 10 }}>
                                    <input type="file" className="form-control-file" style={{ marginLeft: 100 }} />
                                </InputGroup>
                                <div className="form-check" style={{ marginLeft: 200 }}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Status
                                    </label>
                                </div>
                                <div
                                    className="input-group mb-3"
                                    style={{ paddingRight: 400, marginLeft: 200, marginTop: 10 }}
                                >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope" />
                                        </span>
                                    </div>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        name="txtUsername"
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Fullname</span>
                                    </div>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        aria-label="FullName"
                                        aria-describedby="basic-addon1"
                                        name="txtFullName"
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Phone</span>
                                    </div>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone"
                                        aria-label="PhoneNumber"
                                        aria-describedby="basic-addon1"
                                        name="txtPhoneNumber"
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Address</span>
                                    </div>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                        aria-label="Address"
                                        aria-describedby="basic-addon1"
                                        name="txtAddress"
                                    />
                                </div>
                                <div style={{ marginLeft: 250 }}>
                                    <Button
                                        style={{ fontSize: 16 }}
                                        type="submit"
                                        className="btn-lg btn-block btn-primary w-50"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Row>
                </Container>
                <Container className="container-fluid bg-light">
                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0 text-primary">
                        User's Gallery
                    </h1>
                    <form method="post" id="addNewFrm" className="form">
                        <div className="input-group mb-3 " style={{ marginTop: 10 }}>
                            <input type="file" className="form-control-file " />
                        </div>
                    </form>
                    <div className="row ">
                        <div className="col-lg-2 col-md-4 col-6 border-success">
                            <a href="#" className="d-block h-50">
                                <img
                                    className="img-fluid img-thumbnail"
                                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                    alt=""
                                />
                            </a>
                            <div>
                                <button className="btn-danger" style={{ marginLeft: 170, marginTop: 80 }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <a href="#" className="d-block h-50">
                                <img
                                    className="img-fluid img-thumbnail"
                                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                    alt="none"
                                />
                            </a>
                            <div>
                                <button className="btn-danger" style={{ marginLeft: 170, marginTop: 80 }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}
