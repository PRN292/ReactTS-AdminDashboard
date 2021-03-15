export default class Comment {
    id: number;
    dishId: number;
    rating: number;
    comment: string;
    author: string;
    date: string | number | Date;

    constructor() {
        this.id = 0;
        this.dishId = 0;
        this.rating = 0;
        this.comment = "";
        this.author = "";
        this.date = "";
    }
}
