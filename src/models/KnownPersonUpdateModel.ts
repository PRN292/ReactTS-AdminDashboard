export default class KnownPersonUpdateModel {
    address: string | undefined;
    password: string | undefined;
    fullName: string | undefined;
    phoneNumber: string | undefined;
    email: string | undefined;
    username: string | undefined;
    constructor(username: string | undefined, address: string | undefined, email: string | undefined, password: string | undefined,
                fullName: string | undefined, phoneNumber: string | undefined) {
        this.address = address;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.fullName = fullName;
        this.password = password;
        this.email = email;
    }
}
