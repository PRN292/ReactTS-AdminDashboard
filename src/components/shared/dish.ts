export default class Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.category = "";
        this.label = "";
        this.price = "";
        this.featured = false;
        this.description = "";
    }
}
