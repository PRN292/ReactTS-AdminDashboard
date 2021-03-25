import React, {useEffect} from "react";
import {Button, Col, Container, InputGroup, Row} from "reactstrap";
import LoginService from "../services/LoginService";
import LoginStatusAlert from "./LoginStatusAlert";
import LoginResponse from "../models/LoginResponse";
import PropTypes from "prop-types";
import {Formik, Field, Form, FormikValues} from "formik";
import LoginSession from "../models/LoginSession";
import {useHistory} from "react-router";
import UserContext from "../contexts/UserContext";
import {log} from "util";

interface LoginState {
    loggedIn: boolean | undefined;
}

interface LoginFormValues {
    username: string;
    password: string;
}


export default function Login() {
    const history = useHistory();
    const session = React.useContext<LoginSession>(UserContext);

    const loginService = new LoginService();
    const [loggedInFailed, setLoggedInFailed] = React.useState<boolean>(false);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token !== null) {
            history.replace("/editProfile");
        }
    },[]);

    function handleLoginFormik(values: FormikValues) {
        loginService
            .authenticate(values.username, values.password)
            .then((loginRes) => {
                session.username = loginRes?.name;
                window.localStorage.setItem("token", loginRes?.token as string);
                window.localStorage.setItem("username", loginRes?.name as string);
                window.localStorage.setItem("fullName", loginRes?.username as string);
                window.localStorage.setItem("address", loginRes?.address as string);

                history.push("/home");
            })
            .catch((err: Promise<any>) => {
                err.then(() => {
                    // @ts-ignore
                    swal("Failed!", "Invalid username or password", "error");
                });
            });
    }


    // @ts-ignore
    return (
        <Container fluid style={{paddingTop: 100}}>
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
                        {loggedInFailed ? (
                            <LoginStatusAlert color={"danger"} msg={"Invalid username or password"}/>
                        ) : (
                            <div/>
                        )}
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                            }}
                            onSubmit={handleLoginFormik}
                        >
                            <Form>
                                <InputGroup className=" mb-3" style={{paddingRight: 100, paddingLeft: 100}}>
                                    <div className="input-group-prepend ">
                                            <span className="input-group-text">
                                                <i className="fa fa-user"/>
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
                                <div className="input-group mb-3"
                                     style={{paddingRight: 100, paddingLeft: 100}}>
                                    <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-lock"/>
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
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
    );


    /*  function login()
      {
          const {match, location, history} = props;
          const {session} = this.context;
          const {from}: any = location.state || {from: {pathname: "/"}};
          auth.signin(() => {
              history.replace(from);
          });
      }*/
}
