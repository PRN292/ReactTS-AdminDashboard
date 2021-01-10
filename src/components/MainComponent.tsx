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
import Dishdetail from "./DishdetailComponent";
import {COMMENTS} from "./shared/comments";
import Dish from "./shared/dish";
import Promotion from "./shared/promotion";
import Leader from "./shared/leader";
import Comment from "./shared/comment";
import About from "./AboutUsComponent";

export default function Main() {
    const [dishes] = useState<Dish[]>(DISHES);
    const [promotions] = useState<Promotion[]>(PROMOTIONS);
    const [leaders] = useState<Leader[]>(LEADERS);
    const [comments] = useState<Comment[]>(COMMENTS);

    const HomePage = () => {
        return (
            <Home
                dish={dishes.filter((dish) => dish.featured)[0]}
                promotion={promotions.filter((promotion) => promotion.featured)[0]}
                leader={leaders.filter((leader) => leader.featured)[0]}
            />
        );
    };

    const DishWithId = ({ match }: any) => {
        const dishId: number = parseInt(match.params.dishId, 10);
        return (
            <Dishdetail dish={dishes.filter((dish) => dish.id === dishId)[0]}
                        comments={comments.filter((comment) => comment.dishId === dishId)}/>
        );
    };

    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => <About leaders={leaders} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    );
}
