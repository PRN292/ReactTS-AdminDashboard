export default class KnownPerson {
    address: string | undefined;
    email: string | undefined;
    name: string | undefined;
    phoneNumber: string | undefined;
    constructor(address: string | undefined, email: string | undefined,
                name: string | undefined, phonenumber: string | undefined) {
        this.address = address;
        this.phoneNumber = phonenumber;
        this.name = name;
        this.email = email;
    }
}
