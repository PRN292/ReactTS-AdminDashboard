import React from "react";
import Dish from "./shared/dish";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import Comment from "./shared/comment";

export default function Dishdetail(props: any) {
    const dish: Dish = props.dish;
    if (dish) {
        return renderDish(dish);
    } else {
        return <div />;
    }
    function renderEachComment(comment: Comment) {
        return (
            <ul key={comment.id} className="list-unstyled">
                <li>{comment.comment}</li>
                <li>-- {comment.author}, {new Intl.DateTimeFormat('vi-VN').format(new Date(comment.date))}</li>
            </ul>
        );
    }

    function renderComments(comments: Comment[] | undefined) {
        if (comments) {
            return comments.map((comment) => {
                return renderEachComment(comment);
            });
        } else {
            return <div />;
        }
    }

    function renderDish(dish: Dish) {
        if (dish != null) {
            return (
                <>
                    <Card className="col-12 col-md-5 m-1">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card className="col-12 col-md-5 m-1">
                        <CardTitle>
                            <h4>Comments</h4>
                        </CardTitle>
                        <CardBody></CardBody>
                    </Card>
                </>
            );
        }
        return <div />;
    }
}
