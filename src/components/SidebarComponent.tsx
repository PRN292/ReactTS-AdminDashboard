import React from "react";
import Brand from "./sidebar/BrandComponent";
import Utilities from "./sidebar/UtilitiesComponent";
import Components from "./sidebar/ComponentsSidebarComponent";
import SidebarHead from "./sidebar/HeadComponent";
import Pages from "./sidebar/PagesComponent";
import Charts from "./sidebar/ChartsComponent";
import Tables from "./sidebar/TablesComponent";
import SidebarToggler from "./sidebar/SidebarToggler";

export default function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brand/>
            <hr className="sidebar-divider my-0"/>
            <SidebarHead />
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">
                Interface
            </div>
            <Components />
            <Utilities />
            <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Addons
                </div>
                <Pages />
                <Charts />
                <Tables />
                <hr className="sidebar-divider d-none d-md-block" />
                <SidebarToggler />

        </ul>
    );
}
