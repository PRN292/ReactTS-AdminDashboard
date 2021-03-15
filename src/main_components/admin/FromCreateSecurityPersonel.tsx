import { Button, Form, Input, InputGroup, Row } from "reactstrap";
import React from "react";

export default class FromCreateSecurityPersonel extends React.Component<any, any> {
    render() {
        return (
            <Form method="post" id="createNewFrm" className="form">
                <Row>
                    <div className="col-6" >
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
                            <Input
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
                                <span className="input-group-text">
                                    <i className="fa fa-phone" />
                                </span>
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
                                <span className="input-group-text">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                </span>
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
                                block
                                color={"primary"}
                                style={{ fontSize: 16 }}
                                type="submit"
                                className="btn-lg w-50"
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                    <div className="col-6">
                        <Row>
                            <div className="col-3">
                                <h6 className="text-primary" style={{ marginTop: 30 }}>Front Identity Card</h6>
                                <InputGroup>
                                    <input type="file" className="form-control-file" />
                                </InputGroup>
                                <img
                                    className="img-fluid img-thumbnail"
                                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                    alt=""
                                />
                                <div>
                                    <button className="btn-danger">Remove</button>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginLeft: 100, marginTop: 30 }}>
                                <h6 className="text-primary">Back Identity Card</h6>
                                <InputGroup>
                                    <input type="file" className="form-control-file" />
                                </InputGroup>
                                <img
                                    className="img-fluid img-thumbnail"
                                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                    alt=""
                                />

                                <div>
                                    <button className="btn-danger">Remove</button>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Form>
        );
    }
}
