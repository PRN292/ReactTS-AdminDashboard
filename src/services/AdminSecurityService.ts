import NewAccount from "../models/NewAccount";
import {accounts, api} from "../api";

//FPTU_Student


export class AdminSecurityService {
    async createNewService(newAccount: NewAccount): Promise<number | undefined> {
        const token = window.localStorage.getItem("token");
        if (token === null || token === "") {
            return undefined;
        }
        return fetch(api + accounts, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: `{"Username" : "${newAccount.fullName}",
            "Password" : "${newAccount.password}",
            "RoleID" : ${newAccount.roleID},
            "Image": "${newAccount.image}",
            "FrontIdentityImage": "${newAccount.frontIdentityCard}",
            "BackIdentityImage": "${newAccount.backIdentityCard}",
            "Address": "${newAccount.backIdentityCard}",
            "FullName": "${newAccount.fullName}"}`,
        })
            .then((res) => {
                return res.status;
        }).catch((err) => {
            return err;
            });
    }
    async updateService(newAccount: NewAccount): Promise<number | undefined> {
        if (window.localStorage.getItem("token") === null) {
            return undefined;
        }
        return fetch("http://api/v1/accounts", {
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(newAccount),
        }).then((res) => {
            return res.status;
        });
    }
}
