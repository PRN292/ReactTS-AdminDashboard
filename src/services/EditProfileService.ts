import KnownPersonUpdateModel from "../models/KnownPersonUpdateModel";
import {accounts, api} from "../api";

export default class EditProfileService {

    async editProfile(model: KnownPersonUpdateModel) {
        console.log(model);
        await fetch(api + accounts, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer: " + window.localStorage.getItem("token")
            },
            body: `{
            "Username": "${model.username}",
            "Image": ${undefined},
            "RoleID": 1,
            "Password": "${model.password}",
            "Fullname": "${model.fullName}",
            "Address": "${model.address}",
            "FrontIdentity": ${undefined},
            "BackIdentity": ${undefined}
            }`
        })
            .then((res) => {
                if (res.status === 400) {
                    throw res.json();
                }
                res.json();
            }
        )
            .then((res) => {
                return res;
        }).catch((err) => {
            console.log(err);
                return err;
        })
    }

}
