import React from "react";
import {Button, Form} from "reactstrap";

export default function TopbarToggler() {
    return (
        <Form className="form-inline">
            <Button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"/>
            </Button>
        </Form>
    );
}
