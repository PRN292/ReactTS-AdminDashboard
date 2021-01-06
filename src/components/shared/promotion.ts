export default class Promotion {
    id: number;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.label = "";
        this.price = "";
        this.featured = false;
        this.description = "";
    }
}
