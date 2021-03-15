import React from "react";
import { Container } from "reactstrap";
import FormCreateAdmin from "./FormCreateAdmin";
import FromCreateSecurityPersonel from "./FromCreateSecurityPersonel";

export default class CreateAccount extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isAdmin: true,
        };
        this.AdminToggle = this.AdminToggle.bind(this);
    }

    AdminToggle() {
        this.setState({ isAdmin: !this.state.isAdmin });
    }
    //
    render() {
        return (
            <Container fluid className="bg-light" style={{ marginTop: 50 }}>
                <div className="col-auto text-center" style={{ marginTop: 100 }}>
                    <h3 className="text-primary">
                        Create Account
                        <div
                            className="form-check form-check-inline"
                            onChange={this.AdminToggle}
                            style={{ marginLeft: 10 }}
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="Admin"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                Admin
                            </label>
                        </div>
                        <div className="form-check form-check-inline" onChange={this.AdminToggle}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="Security Personnel"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Security Personnel
                            </label>
                        </div>
                    </h3>
                </div>
                {this.state.isAdmin ? <FormCreateAdmin /> : <FromCreateSecurityPersonel />}
            </Container>
        );
    }
}
