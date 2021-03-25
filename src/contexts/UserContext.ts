import {createContext} from "react";
import LoginSession from "../models/LoginSession";

const UserContext = createContext<LoginSession>(new LoginSession(undefined, undefined, undefined,
    undefined, undefined));
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
