import NewAccount from "../models/NewAccount";

export class AdminSecurityService {
    async createNewService(newAccount: NewAccount): Promise<number | undefined> {
        return fetch("http://api/v1/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: `{"Username" : "${newAccount.fullName}", 
            "Password" : "${newAccount.password}",
            "RoleID" : "${newAccount.roleID}",
            "Image": "${newAccount.image}",
            "FrontIdentityImage": "${newAccount.frontIdentityCard}",
            "BackIdentityImage": "${newAccount.backIdentityCard}",
            "Address": "${newAccount.backIdentityCard}",
            "FullName": "${newAccount.fullName}"}`,
        }).then((res) => {
            return res.status;
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
