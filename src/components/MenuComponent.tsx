import React, {useContext} from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle, Container, Row} from "reactstrap";
import Dish from "./shared/dish";
import {Link} from "react-router-dom";

const DishContext = React.createContext<Dish | undefined>(undefined);

export default function Menu(props: any): JSX.Element {
    const dishes: Dish[] = props.dishes;

    const menu = dishes.map((dish) => {
        return (
            <DishContext.Provider value={dish}>
                <div key={dish.id} className="col-12 col-md-5">
                    <RenderMenuItem />
                </div>
            </DishContext.Provider>
        );
    });

    return (
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </Row>
            <Row>{menu}</Row>
        </Container>
    );


    function RenderMenuItem() {
        const dish = useContext<Dish | undefined>(DishContext);
        if (dish) {
            return (
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            );
        } else {
            return <div/>;
        }
    };
}
