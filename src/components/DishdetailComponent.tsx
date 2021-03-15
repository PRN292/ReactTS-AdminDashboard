import React from "react";
import Dish from "./shared/dish";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle, Container, NavLink, Row} from "reactstrap";
import Comment from "./shared/comment";
import {Link} from "react-router-dom";
import CommentForm from "./CommentForm";

export default function Dishdetail(props: any) {
    const dish: Dish = props.dish;
    const comments: Comment[] = props.comments;

    if (dish && comments) {
        return renderDish(dish, comments);
    } else {
        return <div/>;
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

    function renderDish(dish: Dish, comments: Comment[]) {
        if (dish && comments) {
            return (
                <Container>
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </Row>
                    <Row>
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
                            <CardBody>
                                {renderComments(comments)}
                                <CommentForm/>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            );
        }
        return <div/>;
    }
}
