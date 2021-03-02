import React from "react";
import {Button} from "reactstrap";

export default function SidebarToggler() {
    return (
        <div className="text-center d-none d-md-inline">
            <Button className="rounded-circle border-0" id="sidebarToggle"/>
        </div>
    );
}
