import React from "react";
import TopbarSearch from "./TopbarSearchComponent";
import TopbarToggler from "./TopbarTogglerComponent";
import TopbarUserInformation from "./TopbarUserInformationComponent";
import TopbarMessages from "./TopbarMessagesComponent";
import TopbarAlerts from "./TopbarAlertsComponent";
import TopbarSearchDropdown from "./TopbarSearchDropdownComponent";
import {Navbar} from "reactstrap";

export default function Topbar() {
    return (
        <Navbar expand light className="bg-white topbar mb-4 static-top shadow">
        <TopbarToggler />
        <TopbarSearch />
            <ul className="navbar-nav ml-auto">
                <TopbarSearchDropdown />
                <TopbarAlerts />
                <TopbarMessages />
                <div className="topbar-divider d-none d-sm-block"/>
                <TopbarUserInformation />
            </ul>
        </Navbar>
    );
}
