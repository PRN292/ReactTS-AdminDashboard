import React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Container, Row} from "reactstrap";
import Promotion from "./shared/promotion";
import Leader from "./shared/leader";
import Dish from "./shared/dish";

export default function Home(props: any) {
    return (
        <Container>
            <Row className="align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </Row>
        </Container>
    );

    function RenderCard({ item }: any) {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                </CardBody>
            </Card>
        );
    }

}
