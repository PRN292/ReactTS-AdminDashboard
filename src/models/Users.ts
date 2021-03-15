export default class Users {
    username: string | undefined;
    phoneNumber: string | undefined;
    address: string | undefined;
    email: string | undefined;

    constructor(
        username: string | undefined,
        phoneNumber: string | undefined,
        address: string | undefined,
        email: string | undefined
    ) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
    }
}
