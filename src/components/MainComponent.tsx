import React, { useState } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Redirect, Route } from "react-router";
import Contact from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import About from "./AboutUsComponent";
import {connect, RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { withRouter } from 'react-router-dom';
import Dish from "./shared/dish";
import Promotion from "./shared/promotion";
import Leader from "./shared/leader";
import Comment from "./shared/comment";

export default function Main() {
    const dishes: Dish[] = useSelector((state: RootStateOrAny) => state.dishes);
    const comments: Comment[] = useSelector((state: RootStateOrAny) => state.comments);
    const leaders: Leader[] = useSelector((state: RootStateOrAny) => state.leaders);
    const promotions: Promotion[] = useSelector((state: RootStateOrAny) => state.promotions);
    const dispatch = useDispatch();

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
            <Dishdetail
                dish={dishes.filter((dish: Dish) => dish.id === dishId)[0]}
                comments={comments.filter((comment: Comment) => comment.dishId === dishId)}
            />
        );
    };

    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={(props: any) => <Menu dishes={dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={(props: any) => <About leaders={leaders} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    );
}
