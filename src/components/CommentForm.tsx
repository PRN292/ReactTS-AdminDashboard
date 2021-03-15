import React from "react";
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import {Control, Errors, LocalForm} from "react-redux-form";

const required = (val: any) => val && val.length;
const maxLength = (len: number) => (val: any) => !val || val.length <= len;
const minLength = (len: number) => (val: any) => val && val.length >= len;

export default class CommentForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values: any) {
        alert(`Current state is: ${JSON.stringify(values)}`);
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-lg fa-pencil" /> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="col-12">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="col-12 mt-2 mb-2">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select
                                        model=".rating"
                                        id="rating"
                                        name="rating"
                                        className="form-control"
                                        defaultValue={5}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Row>
                                <Row className="col-12 mt-2 mb-2">
                                    <Label htmlFor="name">Your name</Label>
                                    <Control.text
                                        model=".name"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Your name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors model=".name" className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Required ",
                                        minLength: "Only accept min length as 2 characters",
                                        maxLength: "Only accept max length equal or less than 15 characters",
                                    }}/>
                                </Row>
                                <Row className="col-12 mt-2 mb-2">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea
                                        model=".comment"
                                        rows={12}
                                        name="comment"
                                        className="form-control"
                                    />
                                </Row>
                                <Button type="submit" color="primary" className="mt-2">
                                    Submit
                                </Button>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
