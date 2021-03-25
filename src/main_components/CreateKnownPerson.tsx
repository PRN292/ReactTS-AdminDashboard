import {Button, Container, Input, InputGroup, Row} from "reactstrap";
import React from "react";
import UserService from "../services/UserService";
import KnownPerson from "../models/KnownPerson";
import {Formik, FormikValues, Field, Form} from "formik";
import {useHistory} from "react-router-dom";
import KnownPersonService from "../models/KnownPersonService";

export default function CreateKnownPerson() {
    const { v4: uuidv4 } = require("uuid");

    const [currentAccountEmail, setCurrentAccountEmail] = React.useState<string | undefined>(undefined);
    const [base64Images, setBase64Images] = React.useState<string[]>([]);

    const userService = new UserService();
    const knownPersonService = new KnownPersonService();
    const history = useHistory();
    const [avatarImage, setAvatarImage] = React
        .useState<string>("https://iupac.org/wp-content/uploads/2018/05/default-avatar.png");



    async function handleCreateKnownPerson(values: FormikValues) {
        setCurrentAccountEmail(values.email);

        const response = await userService.addKnownPerson(
            new KnownPerson(values.address, values.email, values.fullname, values.phonenumber)
        );
        if (response.status === 200) {
            sweetAlert("Success!", "Successfully added a known person!", "success");
            //history.replace("/viewAll");
        } else if (response.status === 400) {
            sweetAlert("Failed!", "Email is already exist or other fields is not conform! Try again.", "error");
        }
    }

    async function handleUpdateKnownPersonImages(email: string) {
        console.log(email);
        base64Images.forEach((base64Image) => {
            knownPersonService.uploadKnownPersonImages(base64Image, email).then(res => {
                if (res.status === 500) {
                    sweetAlert("Failed!", "You must upload the image containing a face and in PNG image format! Try again.", "error");
                    throw "error";
                }
            });
        });
    }

    function handleAddImages(e: any) {
        const images: FileList = e.target.files;
        setBase64Images([]);
        for (let i=0; i< images.length; i++) {
            //@ts-ignore
            convertBase64String(images[i]).then((base64Image: string) => {
                base64Images.push(base64Image);
                setBase64Images(base64Images);
            });
        }
    }

    function convertBase64String(file: File) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    return (
        <Container fluid>
            <Formik
                initialValues={{
                    address: "",
                    email: "",
                    fullname: "",
                    phonenumber: "",
                }}
                onSubmit={(values) => {
                    handleCreateKnownPerson(values);
                    handleUpdateKnownPersonImages(values.email);
                }}
            >
                <Form className="form">
                    <Row>
                        <div className="col-6 text-center" style={{marginTop: 50}}>
                            <h1 className="text-primary" style={{marginTop: 100}}>
                                Create Known Person
                            </h1>
                            <InputGroup className="mb-3" style={{paddingRight: 400, marginLeft: 200, marginTop: 10}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope"/>
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                    id="email"
                                    model={"email"}
                                    aria-describedby="basic-addon1"
                                    name="email"
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{paddingRight: 400, marginLeft: 200}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-user"/>
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    aria-label="FullName"
                                    id={"fullname"}
                                    aria-describedby="basic-addon1"
                                    name="fullname"
                                    model={"fullname"}
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{paddingRight: 400, marginLeft: 200}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-phone"/>
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    aria-label="PhoneNumber"
                                    aria-describedby="basic-addon1"
                                    id={"phonenumber"}
                                    name="phonenumber"
                                    model={"phonenumber"}
                                />
                            </InputGroup>
                            <InputGroup className="input-group mb-3" style={{paddingRight: 400, marginLeft: 200}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-map-marker" aria-hidden="true"/>
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    aria-label="Address"
                                    id={"address"}
                                    aria-describedby="basic-addon1"
                                    name="address"
                                    model={"address"}
                                />
                            </InputGroup>
                            <div style={{marginLeft: 250}}>
                                <Button
                                    color={"primary"}
                                    style={{fontSize: 16}}
                                    type="submit"
                                    className="btn-lg btn-block btn-primary w-50"
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                        <div className="col-6" style={{marginTop: 150}}>
                            <h1 className="text-primary">User's Gallery</h1>
                            <div className="form-group">
                                <span className="btn btn-default btn-file">
                                    <Input
                                        onChange={handleAddImages}
                                        id="input-2"
                                        name="input2[]"
                                        type="file"
                                        className="file"
                                        multiple
                                        data-show-upload="false"
                                        data-show-caption="true"
                                        model={"input2"}
                                    />
                                </span>
                            </div>
                        </div>
                    </Row>
                </Form>
            </Formik>
        </Container>
    );
}
