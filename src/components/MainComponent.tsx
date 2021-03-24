import React, {useContext} from "react";
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from "../main_components/LoginComponent";
import Header from "../main_components/HeaderComponent";
import Footer from "../main_components/FooterComponent";
import Home from "../main_components/HomeComponent";
import CreateAccount from "../main_components/admin/CreateAccountComponent";
import UpdateUser from "../main_components/admin/UpdateUserAccount";
import ViewAll from "../main_components/admin/ViewAllUser";
import CreateKnownPerson from "../main_components/CreateKnownPerson";
import EditOwnProfile from "../main_components/EditOwnProfile";
import UserContext, {UserProvider} from "../contexts/UserContext";
import LoginSession from "../models/LoginSession";

export default function Main() {
    const [user, setUser] = React.useState<LoginSession>(new LoginSession(undefined, undefined));
    return (
        <UserProvider value={user}>
            <>
                <Header/>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <PrivateRoute path="/home">
                        <Home/>
                    </PrivateRoute>
                    <PrivateRoute path="/createAccount">
                        <CreateAccount/>
                    </PrivateRoute>
                    <PrivateRoute path="/updateUser">
                        <UpdateUser/>
                    </PrivateRoute>
                    <PrivateRoute path="/viewAll">
                        <ViewAll/>
                    </PrivateRoute>
                    <Route path="/createKnownPerson">
                        <CreateKnownPerson/>
                    </Route>
                    <PrivateRoute path="/editProfile">
                        <EditOwnProfile/>
                    </PrivateRoute>
                    <Redirect to="/login"/>
                </Switch>
                <Footer/>
            </>
        </UserProvider>
    );

// @ts-ignore
    function PrivateRoute({children, ...rest}) {
        var session = useContext(UserContext);
        session.username = "admin";
        console.log(session?.username);
        return (
            <Route
                {...rest}
                render={({location}) =>
                    session?.username ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: location}
                            }}
                        />
                    )
                }
            />
        );
    }
}
