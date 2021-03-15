import React from "react";
import { Form } from "reactstrap";

export default class HeaderSearch extends React.PureComponent<any, any> {
    render() {
        return (
            <Form className="form-inline my-2 my-lg-0" style={{ paddingLeft: 5 }}>
                <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                    Search
                </button>
            </Form>
        );
    }
}
