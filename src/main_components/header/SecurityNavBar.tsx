import HeaderSearch from "./SearchComponent";
import HeaderNotification from "./NotificationComponent";
import HeaderDropdown from "./DropdownComponent";
import React from "react";
import DropdownSecurityComponent from "./DropdownSecurityComponent";

export default class SecurityNavBar extends React.Component<any, any> {
    render() {
        return (
            <>
                <HeaderSearch /> <HeaderNotification />
                <DropdownSecurityComponent />
            </>
        );
    }
}
