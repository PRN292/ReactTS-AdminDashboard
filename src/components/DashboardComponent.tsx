import React from "react";
import ScrollToTop from "./ScrollToTopComponent";
import Sidebar from "./SidebarComponent";
import Topbar from "./topbar/TopbarComponent";
import DataTableComp from "./sidebar/DataTableComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/fontawesome-free-solid';

export default function Dashboard() {
    return (
        <>
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar/>
                        <div className="container-fluid">
                            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                            <FontAwesomeIcon icon={["fas", "bell"]} />

                            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo
                                table below.
                                For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.
                            </p>
                            <DataTableComp/>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop/>
        </>
    );

}
