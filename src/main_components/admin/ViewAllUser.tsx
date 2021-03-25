import React, {useEffect} from "react";
import {Toast} from "react-bootstrap";
import {getToken, onMessageListener} from "../../firebase";
import {useHistory, Link} from "react-router-dom";
import KnownPersonService from "../../models/KnownPersonService";
import {Button} from "reactstrap";


export default function ViewAll() {
    const knownPersonService = new KnownPersonService();
    const [show, setShow] = React.useState(false);
    const [notification, setNotification] = React.useState({title: "", body: "", image: ""});
    const [isTokenFound, setTokenFound] = React.useState(false);
    const [deleting, setDeleting] = React.useState<boolean>(false);
    const history = useHistory();

    const [allPerson, setAllPerson] = React.useState(undefined);
    getToken(setTokenFound);

    function createAccount() {
        history.push("/createKnownPerson");
    }

    useEffect(() => {
        knownPersonService.getAllKnownPersons().then((res) => {
            setAllPerson(
                res.map((person: any) => {
                    // @ts-ignore
                    // "data:image/png;base64, " + res.encodingResponseList[0]
                    return (
                        <div key={person.name} className="col-lg-2 col-md-4 col-6">
                            <a href="#" className="d-block h-50">
                                <img
                                    className="img-fluid img-thumbnail"
                                    src={
                                        person.encodingResponseList.length < 1
                                            ? "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                                            : "data:"+person.encodingResponseList[0].image
                                    }
                                    alt=""
                                    style={{height: 200, width: 200}}
                                />
                            </a>
                            <div>
                                <Link to={"updateKnownPerson/" + person.email}>
                                    <button className="btn-primary" style={{marginLeft: 4, marginTop: 60}}>
                                        Update
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        askRemoveKnownPerson(person.email);
                                    }}
                                    className="btn-danger"
                                    style={{marginLeft: 55, marginTop: 60}}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })
            );
        });
    }, [deleting]);

    function askRemoveKnownPerson(email: any) {
        sweetAlert({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this known person!",
            icon: "warning",
            // @ts-ignore
            buttons: true,
            dangerMode: true,
        }).then((willDelete: any) => {
            if (!willDelete) {
                sweetAlert("Your known person is safe!");
            } else {
                knownPersonService.deleteKnownPerson(email).then(res => {
                    if (res.status === 200) {
                        sweetAlert("Your known person has been deleted!", {
                            icon: "success",
                        });
                        setDeleting(!deleting);
                    } else if (res.status === 500) {
                        sweetAlert("Failed to delete known person! Please delete all their encoding images before trying again!", {
                            icon: "error",
                        });
                    }
                });
            }
        });
    }

    onMessageListener()
        .then((payload: any) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
                image: payload.notification.image,
            });
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
                    <span onClick={createAccount} className="material-icons" style={{color: "blue"}}>
                        control_point
                    </span>
                </h3>
                <div className="row" style={{marginTop: 20}}>
                    {allPerson}
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
