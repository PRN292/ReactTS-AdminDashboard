import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import LogoutService from "../../services/LogoutService";
import {useHistory} from "react-router-dom";

export default function HeaderDropdown() {
    const logoutService = new LogoutService();
    const history = useHistory();

    const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    function handleEditProfile() {
        history.push("/editProfile");
    }

    function handleLogout() {
        window.localStorage.removeItem("token");
        logoutService.logout();
        history.replace("/login");
    }

    function handleManageAccount() {
        history.push("/viewAll");
    }

    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            className="nav-item"
            style={{marginLeft: 1400}}
        >
            <DropdownToggle caret color={"primary"} outline className="rounded-pill" id="dropdownMenuButton"/>
            <DropdownMenu right aria-labelledby="dropdownMenuButton">
                <DropdownItem onClick={handleManageAccount}>Manage Known Person</DropdownItem>
                <DropdownItem>Manage Security Personnel</DropdownItem>
                <DropdownItem onClick={handleEditProfile}>Edit Profile</DropdownItem>
                <DropdownItem onClick={handleLogout}>Log Out</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
