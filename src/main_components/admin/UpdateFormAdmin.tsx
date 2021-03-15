import React from "react";
import { Form, Input, InputGroup } from "reactstrap";
import { AdminSecurityService } from "../../services/AdminSecurityService";
import NewAccount from "../../models/NewAccount";

export default class UpdateFormAdmin extends React.PureComponent {
    private adminSecurityService: AdminSecurityService = new AdminSecurityService();
    private username!: HTMLInputElement | HTMLTextAreaElement | null;
    private role = 1;
    private password!: HTMLInputElement | HTMLTextAreaElement | null;
    private image!: HTMLInputElement | HTMLTextAreaElement | null;
    private address!: HTMLInputElement | HTMLTextAreaElement | null;
    private fullName!: HTMLInputElement | HTMLTextAreaElement | null;
    private frontIdentityCard!: HTMLInputElement | null;
    private backIdentityCard!: HTMLInputElement | null;

    constructor(props: any) {
        super(props);
        this.handleUpdateAdmin = this.handleUpdateAdmin.bind(this);
    }

    handleUpdateAdmin(e: React.FormEvent) {
        e.preventDefault();
        this.adminSecurityService.updateService(
            new NewAccount(
                this.username?.value,
                this.role,
                this.password?.value,
                this.image?.value,
                this.frontIdentityCard?.value,
                this.backIdentityCard?.value,
                this.address?.value,
                this.fullName?.value
            )
        );
    }

    render() {
        return (
            <div className="col-6">
                <Form method="post" id="createNewFrm" className="form">
                    <img
                        src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                        className="img-thumbnail center-block"
                        alt="default"
                        height="150"
                        width="150"
                        style={{ marginLeft: 290, marginTop: 50 }}
                    />
                    <InputGroup className="mb-3" style={{ marginLeft: 100, marginTop: 10 }}>
                        <input type="file" className="form-control-file" style={{ marginLeft: 100 }} />
                    </InputGroup>
                    <InputGroup className="mb-3" style={{ paddingRight: 400, marginLeft: 200, marginTop: 10 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-envelope" />
                            </span>
                        </div>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            name="txtUsername"
                            innerRef={(input) => (this.username = input)}
                        />
                    </InputGroup>
                    <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock" />
                            </span>
                        </div>

                        <Input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            name="txtPassword"
                            innerRef={(input) => (this.password = input)}
                        />
                    </div>
                    <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-user" />
                            </span>
                        </div>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            aria-label="FullName"
                            aria-describedby="basic-addon1"
                            name="txtFullName"
                            innerRef={(input) => (this.fullName = input)}
                        />
                    </div>
                    <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-phone" />
                            </span>
                        </div>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            aria-label="PhoneNumber"
                            aria-describedby="basic-addon1"
                            name="txtPhoneNumber"
                            innerRef={(input) => (this.username = input)}
                        />
                    </div>
                    <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                            </span>
                        </div>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            aria-label="Address"
                            aria-describedby="basic-addon1"
                            name="txtAddress"
                            innerRef={(input) => (this.address = input)}
                        />
                    </div>
                    <div style={{ marginLeft: 250 }}>
                        <button style={{ fontSize: 16 }} type="submit" className="btn-lg btn-block btn-primary w-50">
                            Create
                        </button>
                    </div>
                </Form>
            </div>
        );
    }
}
