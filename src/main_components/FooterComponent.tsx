import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <footer className="text-center align-text-bottom">
                Contact Us <Link to="https://www.facebook.com/profile.php?id=100009318392240">Email</Link>,{" "}
                <Link to="https://www.facebook.com/profile.php?id=100009318392240">Phone</Link>
            </footer>
        );
    }
}
