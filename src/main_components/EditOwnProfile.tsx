import { Container, Form, InputGroup, Row } from "reactstrap";
import React from "react";

export default class EditOwnProfile extends React.Component<any, any> {
    render() {
        return (
            <Container fluid className="bg-light" style={{ marginTop: 50 }}>
                <Row>
                    <div className="col-6">
                        <div>
                            <h1 className="text-center text-primary" style={{ marginTop: 50 }}>
                                Edit My Profile
                            </h1>
                            <img
                                src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png"
                                className="img-fluid mt-auto"
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <Form method="post" id="editProfileForm" className="form">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-thumbnail center-block"
                                alt="default"
                                height="150"
                                width="150"
                                style={{ marginLeft: 290, marginTop: 50 }}
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
                            <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-lock" />
                                    </span>
                                </div>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    name="txtPassword"
                                />
                            </div>
                            <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
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
                            </div>
                            <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
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
                            </div>
                            <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
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
                            </div>
                            <div style={{ marginLeft: 250 }}>
                                <button
                                    style={{ fontSize: 16 }}
                                    type="submit"
                                    className="btn-lg btn-block btn-primary w-50"
                                >
                                    Create
                                </button>
                            </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        );
    }
}
