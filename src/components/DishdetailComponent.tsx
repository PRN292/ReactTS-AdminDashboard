import React from "react";
import Dish from "./shared/dish";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import Comment from "./shared/comment";

export default function Dishdetail(props: any) {
    function renderEachComment(comment: Comment) {
        return (
            <ul className="list-unstyled">
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
            return (<div/>);
        }
    }

    function renderDish(dish: Dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardTitle>Comments</CardTitle>
                            <CardBody>{renderComments(dish.comments)}</CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
        return (<div/>);
    }

    const dish: Dish = props.dish;
    if (dish) {
        return renderDish(dish);
    } else {
        return (<div/>);
    }
}
