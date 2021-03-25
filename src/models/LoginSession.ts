export default class LoginSession {
    username: string | undefined;
    role: string | undefined;
    fullName: string | undefined;
    address: string | undefined;
    token: string | undefined;

    constructor(username: string | undefined, role: string | undefined, fullName: string | undefined, address: string | undefined,
        token: string | undefined
    ) {
        this.username = username;
        this.address = address;
        this.fullName = fullName;
        this.token = token;
        this.role = role;
    }
}
