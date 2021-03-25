import React from "react";
import { Link } from "react-router-dom";

export default class HeaderLogo extends React.PureComponent<any, any> {
    render() {
        return (
            <h2 style={{ paddingLeft: 10 }} className="navbar-text text-primary">
                Stranger Detection
            </h2>
        );
    }
}
