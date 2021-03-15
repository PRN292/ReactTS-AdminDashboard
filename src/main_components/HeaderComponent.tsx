import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "./header/LogoComponent";
import AdminNavBar from "./header/AdminNavBar";
import DropdownSecurityComponent from "./header/DropdownSecurityComponent";

interface DropdownState {
    dropdownOpen: boolean;
    navBarShown: boolean;
}

export default class Header extends React.PureComponent<any, DropdownState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dropdownOpen: false,
            navBarShown: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    toggleNavbar() {
        window.localStorage.setItem("token", "cac");
        this.setState({ navBarShown: !this.state.navBarShown });
    }

    render() {
        let role;
        if (window.localStorage.getItem("role") === "Admin") {
            role = <AdminNavBar />;
        } else if (window.localStorage.getItem("role") === "Security Personnel") {
            role = <DropdownSecurityComponent />;
        } else {
            role = <div />;
        }
        const token = window.localStorage.getItem("token");
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: " #e3f2fd" }}>
                <Link to="/home" className="navbar-brand">
                    <img
                        src="https://www.pngfind.com/pngs/m/215-2158883_technology-icon-png-transparent-png.png"
                        alt="cSharp logo"
                        width="60"
                        height="60"
                    />
                    <HeaderLogo />
                </Link>
                <AdminNavBar />
                {/*{role}*/}
            </nav>
        );
    }
}
