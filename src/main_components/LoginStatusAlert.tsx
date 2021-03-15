import React from "react";
import { Alert } from "reactstrap";

export default class LoginStatusAlert extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Alert color={`${this.props.color}`} className="mb-3" style={{ paddingRight: 20, paddingLeft: 23 }}>
                {this.props.msg}
            </Alert>
        );
    }
}
