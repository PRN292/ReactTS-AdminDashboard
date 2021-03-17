import React  from "react";
import { Button, Col, Container, InputGroup, Row } from "reactstrap";
import LoginService from "../services/LoginService";
import LoginStatusAlert from "./LoginStatusAlert";
import LoginResponse from "../models/LoginResponse";
import PropTypes from "prop-types";
import {Formik, Field, Form, FormikValues} from "formik";

interface LoginState {
    loggedIn: boolean | undefined;
}

interface LoginFormValues {
    username: string;
    password: string;
}

export default class Login extends React.PureComponent<any, LoginState> {
    static propTypes: any = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    private loginService: LoginService = new LoginService();


    constructor(props: any) {
        super(props);
        this.state = {
            loggedIn: undefined,
        };
        this.handleLoginFormik = this.handleLoginFormik.bind(this);
    }

    handleLocalStorageLogin(loginRes: LoginResponse | undefined): void {
        if (loginRes !== undefined) {
            window.localStorage.setItem("token", loginRes.token);
            window.localStorage.setItem("username", loginRes.username);
            window.localStorage.setItem("address", loginRes.address);
            window.localStorage.setItem("name", loginRes.name);
            window.localStorage.setItem("role", loginRes.role);
        }
    }


    handleLoginFormik(values: FormikValues) {
        this.loginService
            .authenticate(values.username, values.password)
            .then((loginRes) => {
                this.handleLocalStorageLogin(loginRes);
                this.setState({loggedIn: true});
                this.props.history.push("/home");
            })
            .catch((err) => {
                this.setState({loggedIn: false});
            });
        alert(JSON.stringify(values, null, 2));
    }

    render() {
        return (
            <Container fluid style={{ paddingTop: 100 }}>
                <Row>
                    <Col className="col-7">
                        <img
                            src="https://cdn.dribbble.com/users/627451/screenshots/5866692/isometric_city.png"
                            className="img-fluid mt-auto"
                        />
                    </Col>
                    <Col md={5} className="bg-white-shadow">
                        <div>
                            <h1 className="text-center text-primary ">Login</h1>
                            {this.state.loggedIn === false ? (
                                <LoginStatusAlert color={"danger"} msg={"Invalid username or password"} />
                            ) : (
                                <div />
                            )}
                            <Formik
                                initialValues={{
                                    username: "",
                                    password: "",
                                }}
                                onSubmit={this.handleLoginFormik}
                            >
                                <Form>
                                    <InputGroup className=" mb-3" style={{ paddingRight: 100, paddingLeft: 100 }}>
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text">
                                                <i className="fa fa-user" />
                                            </span>
                                        </div>
                                        <Field
                                            className={"form-control"}
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder={"Username"}
                                        />
                                    </InputGroup>
                                    <div className="input-group mb-3" style={{ paddingRight: 100, paddingLeft: 100 }}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-lock" />
                                            </span>
                                        </div>
                                        <Field
                                            className={"form-control"}
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder={"Password"}
                                        />
                                    </div>
                                    <div style={{ paddingLeft: 200 }}>
                                        <Button
                                            color={"primary"}
                                            style={{ fontSize: 16 }}
                                            type="submit"
                                            block
                                            className="btn-lg w-50"
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    login() {
        const { match, location, history } = this.props;
        const { auth } = this.context;
        const { from }: any = location.state || { from: { pathname: "/" } };
        auth.signin(() => {
            history.replace(from);
        });
    }
}
