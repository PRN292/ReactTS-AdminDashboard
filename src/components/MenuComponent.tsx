import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, Row} from "reactstrap";
import Dish from "./shared/dish";

export default function Menu(props: any): any {
    const dishes: Dish[] = props.dishes;
    return dishes.map((dish) => {
        return (
            <Row>
                <Card key={dish.id} className="col-12 col-md-5 m-1"
                    onClick={() => props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Row>
        );
    });
}
