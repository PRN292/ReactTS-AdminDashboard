import React, {useState} from "react";
import Dishdetail from "./DishdetailComponent";
import {Container, Navbar, NavbarBrand, Row} from "reactstrap";
import Menu from "./MenuComponent";
import {DISHES} from "./shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

export default function Main() {
    const [selectedDish, setSelectedDish] = useState(null);
    const [dishes, setDishes] = useState(DISHES);
    function onDishSelect(dishId: any) {
        setSelectedDish(dishId);
    }
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Menu dishes={dishes} onClick={(dishId: string) => onDishSelect(dishId)} />
                </Row>
                <Row>
                    <Dishdetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
                </Row>
            </Container>
            <Footer />
        </>
    );
}
