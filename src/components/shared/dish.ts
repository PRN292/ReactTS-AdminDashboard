import Comment from "./comment";

export default class Dish {
    id: number | undefined;
    name: string | undefined;
    image: string | undefined;
    category: string | undefined;
    label: string | undefined;
    price: string | undefined;
    description: string | undefined;
    comments: Comment[] | undefined;
}
