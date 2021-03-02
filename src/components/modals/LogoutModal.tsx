import React from "react";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";

export default function LogoutModal() {
    return (
        <Modal className="fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <Button className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </Button>
                    </div>
                    <ModalBody>Select "Logout" below if you are ready to end your current session.
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-secondary" type="button" data-dismiss="modal">Cancel</Button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                    </ModalFooter>
                </div>
            </div>
        </Modal>
    );
}
