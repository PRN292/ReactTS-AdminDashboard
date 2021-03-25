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
                    <div className="col-11 bg-dark h-100" style={{marginTop: 90}} >
                    </div>
                </Row>
            </Container>
        );
    }
}
