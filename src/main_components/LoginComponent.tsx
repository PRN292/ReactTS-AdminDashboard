import React, {useContext} from "react";
import {Button, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
import LoginService from "../services/LoginService";
import LoginStatusAlert from "./LoginStatusAlert";
import LoginResponse from "../models/LoginResponse";
import {authContext} from "../App";
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

interface LoginState {
    loggedIn: boolean | undefined;
}

class Login extends React.PureComponent<any, LoginState> {
    static contextType = authContext;
    static propTypes: any = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    private loginService: LoginService = new LoginService();
    private username!: HTMLInputElement | HTMLTextAreaElement | null;
    private password!: HTMLInputElement | HTMLTextAreaElement | null;

    constructor(props: any) {
        super(props);
        this.state = {
            loggedIn: undefined,
        };
        this.handleLogin = this.handleLogin.bind(this);
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

    handleLogin(e: React.FormEvent) {
        e.preventDefault();
        this.login();
        /*e.preventDefault();
        this.loginService
            .authenticate(this.username?.value, this.password?.value)
            .then((loginRes) => {
                this.handleLocalStorageLogin(loginRes);
                this.setState({loggedIn: true});
                this.props.history.push("/home");
            })
            .catch((err) => {
                this.setState({loggedIn: false});
            });*/
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
                                <LoginStatusAlert color={"danger"} msg={"Invalid username or password"}/>
                            ) : (
                                <div/>
                            )}
                            <Form onSubmit={this.handleLogin}>
                                <InputGroup className=" mb-3" style={{paddingRight: 100, paddingLeft: 100}}>
                                    <div className="input-group-prepend ">
                                        <span className="input-group-text">
                                            <i className="fa fa-user"/>
                                        </span>
                                    </div>
                                    <Input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder={"Username"}
                                        innerRef={(input) => (this.username = input)}
                                    />
                                </InputGroup>
                                <div className="input-group mb-3" style={{paddingRight: 100, paddingLeft: 100}}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"/>
                                        </span>
                                    </div>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder={"Password"}
                                        innerRef={(input) => (this.password = input)}
                                    />
                                </div>
                                <div style={{paddingLeft: 200}}>
                                    <Button
                                        color={"primary"}
                                        style={{fontSize: 16}}
                                        type="submit"
                                        block
                                        className="btn-lg w-50"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    login() {
        const { match, location, history } = this.props;
        const { auth } = this.context;
        let { from }: any = location.state || { from: {pathname: "/"}};
        auth.signin(() => {
            history.replace(from);
        });

    }
}

export default withRouter(Login);
