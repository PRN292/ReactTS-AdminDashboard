import HeaderSearch from "./SearchComponent";
import HeaderNotification from "./NotificationComponent";
import HeaderDropdown from "./DropdownComponent";
import React from "react";

export default class AdminNavBar extends React.Component<any, any> {
    render() {
        return (
            <>
                <HeaderSearch /> <HeaderNotification />
                <HeaderDropdown />
            </>
        );
    }
}
