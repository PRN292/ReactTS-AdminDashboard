import {api, knownPersons} from "../api";
import {FormikValues} from "formik";

export default class KnownPersonService {
    //http://192.168.8.32:45455/api/v1/knownPersons
    async getAllKnownPersons() {
        return fetch(api + knownPersons, {
            headers: {
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            }
        }).then(res => res.json());
    }

    async uploadKnownPersonImages(base64Image: string, email: string | undefined) {
        console.log(base64Image.split("data:image/png;base64,")[1]);
        return fetch(api + knownPersons + "/encodings", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            method: "POST",
            body: `{
            "knownPersonEmail": "${email}",
            "image": "${base64Image.split("data:image/png;base64,")[1]}"
            }`}
        );
    }

    async deleteKnownPerson(email: string) {
        return fetch(api + knownPersons + `/${email}`, {
            headers: {
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            method: "DELETE",
        });
    }

    async deleteKnownPersonPictureGallery(pictureID: string) {
        return fetch(api+knownPersons+"/encodings?ID="+pictureID, {
            headers: {
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            method: "DELETE"
        });
    }

    async getKnownPerson(email: string) {
        return fetch(api + knownPersons + `/${email}`, {
            headers: {
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            method: "GET",
        });
    }

    async updateKnownPerson(values: FormikValues) {
        return fetch(api + knownPersons, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            method: "PATCH",
            body: `{
            "name": "${values.name}",
            "phone": "${values.phone}",
            "email": "${values.email}",
            "address": "${values.address}"
            }`,
        });
    }
}
