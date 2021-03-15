export default class LogoutService {
    logout(): void {
        if (window.localStorage.getItem("token") !== null) {
            window.localStorage.removeItem("token");
        }
    }
}
