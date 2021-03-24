import React from "react";
import {Toast} from "react-bootstrap";
import {Container, Form, InputGroup, Row} from "reactstrap";
import {getToken, onMessageListener} from "../../firebase";

export default function ViewAll() {
    const [show, setShow] = React.useState(false);
    const [notification, setNotification] = React.useState({title: "", body: "", image: ""});
    const [isTokenFound, setTokenFound] = React.useState(false);
    getToken(setTokenFound);

    onMessageListener()
        .then((payload: any) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
                image: payload.notification.image,
            });
            console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));
    return (
        <>
            <div className="container-fluid bg-light" style={{paddingTop: 20}}>
                <h1 className="text-center text-lg-left text-primary" style={{marginTop: 100, marginLeft: 700}}>
                    All Known Person
                </h1>
                <h3 className="text-primary">
                    Add New Known Person{" "}
                    <span className="material-icons" style={{color: "blue"}}>
                        control_point
                    </span>
                </h3>
                <div className="row" style={{marginTop: 20}}>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <a href="#" className="d-block h-50">
                            <img
                                className="img-fluid img-thumbnail"
                                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                alt=""
                            />
                        </a>
                        <div>
                            <button className="btn-primary" style={{marginLeft: 4, marginTop: 42}}>
                                Update
                            </button>
                            <button className="btn-danger" style={{marginLeft: 71, marginTop: 42}}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
                animation
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    minWidth: 200,
                }}
            >
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                    <strong className="mr-auto">{notification.title}</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>
                    {notification.body} <br/>
                    <img src={notification.image} alt={""}/>
                </Toast.Body>
            </Toast>
        </>
    );
}
