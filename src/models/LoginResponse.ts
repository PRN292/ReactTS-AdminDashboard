export default class LoginResponse {
    username: string;
    address: string;
    name: string;
    token: string;
    role: string;

    constructor(username: string, address: string, name: string, token: string, role: string) {
        this.username = username;
        this.address = address;
        this.name = name;
        this.token = token;
        this.role = role;
    }
}
