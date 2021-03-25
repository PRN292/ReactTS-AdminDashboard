import Users from "../models/Users";
import KnownPerson from "../models/KnownPerson";
import {api, knownPersons} from "../api";

export default class UserService {
    async addUser(user: Users): Promise<Users | undefined> {
        if (window.localStorage.getItem("token") === null) {
            return undefined;
        }
        return fetch("http://localhost", {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            method: "POST",
        })
            .then((res) => {
                if (res.status === 400) {
                    throw res.json();
                }
                return res.json();
            })
            .then((resBody: Promise<Users>) => {
                return resBody;
            });
    }

    async updateKnownPerson(updateKnownPerson: Users): Promise<number | undefined> {
        if (window.localStorage.getItem("token") === null) {
            return undefined;
        }
        return fetch("http://localhost", {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateKnownPerson),
            method: "PATCH ",
        }).then((res) => {
            return res.status;
        });
    }

    async addKnownPerson(knownPerson: KnownPerson) {
        return fetch(api + knownPersons, {
            method: "POST",
            // @ts-ignore
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            body: JSON.stringify(knownPerson),
        });
    }
}
