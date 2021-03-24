export default class LoginSession {
    username: string | undefined;
    role: string | undefined;


    constructor(username: string | undefined, role: string | undefined) {
        this.username = username;
        this.role = role;
    }
}
