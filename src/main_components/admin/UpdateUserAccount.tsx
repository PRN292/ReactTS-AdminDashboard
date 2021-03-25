import React, { useEffect, useRef } from "react";
import { Button, Container, Input, InputGroup, Row } from "reactstrap";
import KnownPersonService from "../../models/KnownPersonService";
import { Formik, FormikValues, Form, Field } from "formik";
import KnownPersonUpdateModel from "../../models/KnownPersonUpdateModel";

export default function UpdateUser(props: any) {
    const [userGallery, setUserGallery] = React.useState();

    const knownPersonService = new KnownPersonService();
    const formikRef = useRef();
    const [deleting, setDeleting] = React.useState<boolean>(false);
    const { email } = props;
    useEffect(() => {
        knownPersonService.getKnownPerson(email).then((res) => {
            if (res.status === 200) {
                if (formikRef.current) {
                    res.json().then((knownPerson) => {
                        const currentFormikValue = formikRef.current;
                        // @ts-ignore
                        currentFormikValue.setFieldValue("email", email);
                        // @ts-ignore
                        currentFormikValue.setFieldValue("phone", knownPerson.phone);
                        // @ts-ignore
                        currentFormikValue.setFieldValue("name", knownPerson.name);
                        // @ts-ignore
                        currentFormikValue.setFieldValue("address", knownPerson.address);
                        setUserGallery(
                            knownPerson.encodingResponseList.map((image: any) => {
                                return RenderUserGallery(image);
                            })
                        );
                    });
                }
            }
        });
    }, [deleting]);

    function askRemoveKnownPersonGallery(imageID: any) {
        sweetAlert({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this known person's picture in the gallery!",
            icon: "warning",
            // @ts-ignore
            buttons: true,
            dangerMode: true,
        }).then((willDelete: any) => {
            if (!willDelete) {
                sweetAlert("Your known person's picture is safe!");
            } else {
                knownPersonService.deleteKnownPersonPictureGallery(imageID).then(res => {
                    if (res.status === 200) {
                        sweetAlert("Your known person's picture has been deleted!", {
                            icon: "success",
                        });
                        setDeleting(!deleting);
                    }
                });
            }
        });
    }

    function RenderUserGallery(image: any) {
        return (
            <div className="col-lg-2 col-md-4 col-6">
                <a href="#" className="d-block h-50">
                    <img className="img-fluid img-thumbnail" src={"data:"+image.image} alt="none" />
                </a>
                <div>
                    <button onClick={() => {
                        askRemoveKnownPersonGallery(image.id);
                    }} className="btn-danger" style={{ marginLeft: 170, marginTop: 80 }}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }

    function handleUpdateKnownPersonProfile(values: FormikValues) {
        knownPersonService.updateKnownPerson(values).then((res) => {
            if (res.status === 200) {
                sweetAlert("Success!", "Successfully updated this known person profile!", "success");
            } else if (res.status === 400) {
                sweetAlert("Failed!", "Failed to update this known person profile!", "error");
            }
        });
    }

    return (
        <>
            <Container fluid className="bg-light" style={{ marginTop: 50 }}>
                <Row>
                    <div className="col-6">
                        <div>
                            <h1 className="text-center text-primary" style={{ marginTop: 50 }}>
                                Update Known Person Profile
                            </h1>
                            <img
                                src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png"
                                className="img-fluid mt-auto"
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <Formik
                            // @ts-ignore
                            innerRef={formikRef}
                            initialValues={{
                                email: "",
                                name: "",
                                phone: "",
                                address: "",
                            }}
                            onSubmit={handleUpdateKnownPersonProfile}
                        >
                            <Form>
                                <div
                                    className="input-group mb-3"
                                    style={{ paddingRight: 400, marginLeft: 200, marginTop: 150 }}
                                >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope" />
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        name={"email"}
                                        model={"email"}
                                        readOnly
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-user" />
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        aria-label="FullName"
                                        aria-describedby="basic-addon1"
                                        name="name"
                                        model={"name"}
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-phone" />
                                        </span>
                                    </div>
                                    <Field
                                        type="phone"
                                        className="form-control"
                                        placeholder="Phone"
                                        aria-label="PhoneNumber"
                                        aria-describedby="basic-addon1"
                                        name="phone"
                                        model={"phone"}
                                    />
                                </div>
                                <div className="input-group mb-3" style={{ paddingRight: 400, marginLeft: 200 }}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-map-marker" />
                                        </span>
                                    </div>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                        aria-label="Address"
                                        aria-describedby="basic-addon1"
                                        name="address"
                                        model={"address"}
                                    />
                                </div>
                                <div style={{ marginLeft: 250 }}>
                                    <Button
                                        style={{ fontSize: 16 }}
                                        type="submit"
                                        className="btn-lg btn-block btn-primary w-50"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </Row>
            </Container>
            <Container className="container-fluid bg-light">
                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0 text-primary">User's Gallery</h1>
                <form method="post" id="addNewFrm" className="form">
                    <div className="input-group mb-3 " style={{ marginTop: 10 }}>
                        <input type="file" className="form-control-file " />
                    </div>
                </form>
                <div className="row">{userGallery}</div>
            </Container>
        </>
    );
}
