import { Container, Form, InputGroup, Row } from "reactstrap";
import React from "react";

export default class CreateKnownPerson extends React.Component<any, any> {
    render() {
        return (
            <Container fluid>
                <Form method="post" id="createNewKnownPersonForm" className="form">
                    <Row>
                        <div className="col-6 text-center" style={{ marginTop: 50 }}>
                            <h1 className="text-primary" style={{ marginTop: 100 }}>
                                Create Known Person
                            </h1>
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-thumbnail center-block"
                                alt="default"
                                height="150"
                                width="150"
                                style={{ marginLeft: 40, marginTop: 50 }}
                            />
                            <InputGroup className="mb-3" style={{ marginLeft: 100, marginTop: 10 }}>
                                <input type="file" className="form-control-file" style={{ marginLeft: 100 }} />
                            </InputGroup>
                            <InputGroup className="mb-3" style={{ paddingRight: 400, marginLeft: 200, marginTop: 10 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    name="txtUsername"
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-user" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    aria-label="FullName"
                                    aria-describedby="basic-addon1"
                                    name="txtFullName"
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-phone" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    aria-label="PhoneNumber"
                                    aria-describedby="basic-addon1"
                                    name="txtPhoneNumber"
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    aria-label="Address"
                                    aria-describedby="basic-addon1"
                                    name="txtAddress"
                                />
                            </InputGroup>
                            <div style={{ marginLeft: 250 }}>
                                <button
                                    style={{ fontSize: 16 }}
                                    type="submit"
                                    className="btn-lg btn-block btn-primary w-50"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                        <div className="col-6" style={{ marginTop: 150 }}>
                            <h1 className="text-primary">User's Gallery</h1>
                            <div className="form-group">
                                <span className="btn btn-default btn-file">
                                    <input
                                        id="input-2"
                                        name="input2[]"
                                        type="file"
                                        className="file"
                                        multiple
                                        data-show-upload="false"
                                        data-show-caption="true"
                                    />
                                </span>
                            </div>
                        </div>
                    </Row>
                </Form>
            </Container>
        );
    }
}
