import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import LogoutService from "../../services/LogoutService";
import {withRouter} from "react-router-dom";

interface DropdownState {
    dropdownOpen: boolean;
}

class HeaderDropdown extends React.PureComponent<any, DropdownState> {
    private logoutService: LogoutService = new LogoutService();
    constructor(props: any) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleManageAccount = this.handleManageAccount.bind(this);
        this.handleEditProfile = this.handleEditProfile.bind(this);
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    handleEditProfile(){
        const {history} = this.props;
        history.push("/editProfile");
    }

    handleLogout() {
        const { match, location, history } = this.props;
        this.logoutService.logout();
        history.push("/login");
        // /users
        // /users
    }

    handleManageAccount(){
        const {history} = this.props;
        history.push("viewAll");
    }

    render() {
        return (
            <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
                className="nav-item"
                style={{ marginLeft: 20 }}
            >
                <DropdownToggle caret color={"primary"} outline className="rounded-pill" id="dropdownMenuButton" />
                <DropdownMenu right aria-labelledby="dropdownMenuButton">
                    <DropdownItem onClick={this.handleManageAccount}>Manage Known Person</DropdownItem>
                    <DropdownItem>Manage Security Personnel</DropdownItem>
                    <DropdownItem onClick={this.handleEditProfile}>Edit Profile</DropdownItem>
                    <DropdownItem onClick={this.handleLogout}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default withRouter(HeaderDropdown);
