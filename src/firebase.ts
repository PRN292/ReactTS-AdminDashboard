import firebase from "firebase/app";
import "firebase/messaging";

let firebaseConfig = {
    apiKey: "AIzaSyASmQKmEj0zSq9sZbzodY-NS_SzUbBQnss",
    authDomain: "strangerdetection.firebaseapp.com",
    databaseURL: "https://strangerdetection-default-rtdb.firebaseio.com",
    projectId: "strangerdetection",
    storageBucket: "strangerdetection.appspot.com",
    messagingSenderId: "626479714866",
    appId: "1:626479714866:web:4bb43584986c1a9173222b",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound: any) => {
    return messaging
        .getToken({
            vapidKey: "BAUgEVaworvhBvIw-oGf5VK1RYsbx5Dx85qQ3HsMaogzMgv_oq3-XD0kQHQeEU7EbVCJK2cRGDgbV_vcWC0JU6I",
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log("No registration token available. Request permission to generate one.");
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });
