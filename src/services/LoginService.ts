import LoginResponse from "../models/LoginResponse";
import {accounts, api} from "../api";

export default class LoginService {
    async authenticate(userName: string | undefined, password: string | undefined): Promise<LoginResponse | undefined> {
        return fetch(api + accounts + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: `{"Username" : "${userName}", "Password" : "${password}"}`,
        })
            .then((res) => {
                if (res.status === 400) {
                    throw res.json();
                }
                return res.json();
            })
            .then((resBody: LoginResponse) => {
                return resBody;
            });
    }
}
