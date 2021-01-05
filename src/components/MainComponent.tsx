import React, { useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "./shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Redirect, Route } from "react-router";

export default function Main() {
    const HomePage = () => {
        return <Home />;
    };
    const [selectedDish, setSelectedDish] = useState(null);
    const [dishes, setDishes] = useState(DISHES);
    function onDishSelect(dishId: any) {
        setSelectedDish(dishId);
    }
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    );
}
