import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Brand() {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={["fas", "laugh-wink"]} />
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
    );
}
