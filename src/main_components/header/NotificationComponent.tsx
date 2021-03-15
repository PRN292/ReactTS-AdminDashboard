import React from "react";

export default class HeaderNotification extends React.PureComponent<any, any> {
    render() {
        return (
            <div style={{ marginLeft: 600 }}>
                <button type="button" className="btn btn-outline-primary align-items-center rounded-pill">
                    <span className="material-icons">notifications</span>
                    <span className="badge badge-danger align-text-top">4</span>
                </button>
            </div>
        );
    }
}
