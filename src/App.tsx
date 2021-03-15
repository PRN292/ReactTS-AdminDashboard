import React, {useContext, useState} from "react";
import Main from "./components/MainComponent";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from "react-redux";
import Header from "./main_components/HeaderComponent";
import {Redirect, Route} from "react-router";
import {ProcessImageClient, ProcessImageRequest} from "./proto/image";
import {credentials} from "@grpc/grpc-js";

/*import {ProcessImageRequest,
    ProcessImageReply,
    CreateEncodingRequest,
    CreateEncodingReply,
    DeleteEncodingRequest,
    DeleteEncodingReply} from './proto/image_pb';

import {ProcessImagePromiseClient} from './proto/image_grpc_web_pb';
 */
const ip = "10.1.129.71";
const port = 50052;


export default function App() {
    var client = new ProcessImageClient(`http://${ip}:${port}`, credentials.createInsecure());
    var req = new ProcessImageRequest().id;
    var stream = client.getChannel();
    console.log(stream);
    return (
        <div></div>
    );

}

/*
*
        <ProvideAuth>
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        </ProvideAuth>
*
* */

export function useAuth() {
    return useContext(authContext);
}
export function PrivateRoute({ children, ...rest }: any) {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function ProvideAuth({children}: any) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export const authContext = React.createContext<undefined | string | any>(undefined);


function useProvideAuth() {
    const [user, setUser] = useState<string | undefined>(undefined);

    const signin = (cb: any) => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = (cb: any) => {
        return fakeAuth.signout(() => {
            setUser(undefined);
            cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb: any) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb: any) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
