import React, {createContext, useContext} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Container, Row} from "reactstrap";
import Promotion from "./shared/promotion";
import Leader from "./shared/leader";
import Dish from "./shared/dish";

const HomeContext = createContext<Dish | Promotion | Leader | undefined>(undefined);

interface CardType {
    dish: Dish;
    leader: Leader;
    promotion: Promotion;
}

export default function Home({dish , promotion , leader}: CardType) {
    return (
        <Container>
            <Row className="align-items-start">
                <div className="col-12 col-md m-1">
                        <RenderCard />
                </div>
                <div className="col-12 col-md m-1">
                    <HomeContext.Provider value={dish}>
                        <RenderCard />
                    </HomeContext.Provider>
                </div>
                <div className="col-12 col-md m-1">
                    <HomeContext.Provider value={leader}>
                        <RenderCard />
                    </HomeContext.Provider>
                </div>
            </Row>
        </Container>
    );



    function RenderCard() {
        const item = useContext<Leader | Promotion | Dish | undefined>(HomeContext);
        if (item) {
            return (
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>
                            <h5>{item.name}</h5>
                        </CardTitle>
                        <h6>{(item as Leader).designation}</h6>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div />;
        }
    }

}
