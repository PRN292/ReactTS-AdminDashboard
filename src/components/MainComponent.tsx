import React, { createContext, useContext, useState } from "react";
import { Switch, Redirect, Route } from "react-router";
import Login from "../main_components/LoginComponent";
import Header from "../main_components/HeaderComponent";
import Footer from "../main_components/FooterComponent";
import Home from "../main_components/HomeComponent";
import CreateAccount from "../main_components/admin/CreateAccountComponent";
import UpdateUser from "../main_components/admin/UpdateUserAccount";
import ViewAll from "../main_components/admin/ViewAllUser";
import CreateKnownPerson from "../main_components/CreateKnownPerson";
import EditOwnProfile from "../main_components/EditOwnProfile";
import {  PrivateRoute } from "../App";

export default function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/createAccount">
                    <CreateAccount />
                </PrivateRoute>
                <PrivateRoute path="/updateUser">
                    <UpdateUser />
                </PrivateRoute>
                <PrivateRoute path="/viewAll">
                    <ViewAll />
                </PrivateRoute>
                <PrivateRoute path="/createKnownPerson">
                    <CreateKnownPerson />
                </PrivateRoute>
                <PrivateRoute path="/editProfile">
                    <EditOwnProfile />
                </PrivateRoute>
                <Redirect to="/login" />
            </Switch>
            <Footer />
        </>
    );

}


