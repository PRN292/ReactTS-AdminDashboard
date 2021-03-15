import React from "react";
import { Container, Row } from "reactstrap";

export default class Home extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="col-11 bg-dark h-100" />
                    <div className="col-1 ">
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                        <div className=" border-success">
                            <img
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                className="img-fluid"
                                alt="none"
                                style={{ marginTop: 10, marginRight: 20, marginLeft: 10, marginBottom: 10 }}
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}
