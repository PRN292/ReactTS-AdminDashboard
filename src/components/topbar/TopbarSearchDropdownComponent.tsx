//Only visible in XS

import React from "react";
import {Button, DropdownMenu, Form, Input, InputGroup, NavItem, NavLink} from "reactstrap";

export default function TopbarSearchDropdown() {
    return (
        <NavItem className="dropdown no-arrow d-sm-none">
            <NavLink className="dropdown-toggle" href="#" id="searchDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw"/>
            </NavLink>

            <DropdownMenu right className="p-3 shadow animated--grow-in"
                 aria-labelledby="searchDropdown">
                <Form className="form-inline mr-auto w-100 navbar-search">
                    <InputGroup>
                        <Input type="text" className="form-control bg-light border-0 small"
                               placeholder="Search for..." aria-label="Search"
                               aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <Button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"/>
                            </Button>
                        </div>
                    </InputGroup>
                </Form>
            </DropdownMenu>
        </NavItem>
    );
}
