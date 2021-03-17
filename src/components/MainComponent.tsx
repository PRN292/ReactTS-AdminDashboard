import React from "react";
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

export default function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/home" component={Home}/>
                <Route path="/createAccount" component={CreateAccount}/>
                <Route path="/updateUser" component={UpdateUser}/>
                <Route path="/viewAll" component={ViewAll}/>
                <Route path="/createKnownPerson" component={CreateKnownPerson}/>
                <Route path="/editProfile" component={EditOwnProfile}/>
                <Redirect to="/login"/>
            </Switch>
            <Footer />
        </>
    );

}


