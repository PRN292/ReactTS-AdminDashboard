import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "./shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Redirect, Route } from "react-router";
import Contact from "./ContactComponent";
import { PROMOTIONS } from "./shared/promos";
import { LEADERS } from "./shared/leaders";

export default function Main() {
    const [dishes] = useState(DISHES);
    const [promotions] = useState(PROMOTIONS);
    const [leaders] = useState(LEADERS);

    const HomePage = () => {
        return (
            <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promotion) => promotion.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
            />
        );
    };

    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    );
}
