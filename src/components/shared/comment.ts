export default class Comment {
    id: number | undefined;
    rating: number | undefined;
    comment: string | undefined;
    author: string | undefined;
    date: string | number | Date;

    constructor() {
        this.id = 0;
        this.rating = 0;
        this.comment = "";
        this.author = "";
        this.date = "";
    }
}
