import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import LogoutService from "../../services/LogoutService";
import { withRouter } from "react-router-dom";

interface DropdownState {
    dropdownOpen: boolean;
}

class HeaderSecurityDropdown extends React.PureComponent<any, DropdownState> {
    private logoutService: LogoutService = new LogoutService();
    constructor(props: any) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    handleLogout() {
        const { match, location, history } = this.props;
        this.logoutService.logout();
        history.push("/login");
        // /users
        // /users
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
                    <DropdownItem href="#">Edit Profile</DropdownItem>
                    <DropdownItem onClick={this.handleLogout}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default withRouter(HeaderSecurityDropdown);
