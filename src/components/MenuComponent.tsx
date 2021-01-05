import React, { Component, useState } from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Col, Media} from "reactstrap";
import Dish from "./shared/dish";
import {DISHES} from "./shared/dishes";
import Dishdetail from "./DishdetailComponent";

type MenuState = {
    dishes: Dish[];
};

type MenuProps = {
    dish: Dish;
};

export default function Menu(): any {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    function onDishSelect(dish: any) {
        setSelectedDish(dish);
    }

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <Dishdetail dish={selectedDish} />
        </div>
    );
}
