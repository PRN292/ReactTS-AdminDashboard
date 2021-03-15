export default class Leader {
    id: number;
    name: string;
    image: string;
    designation: string;
    abbr: string;
    featured: boolean;
    description: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.designation = "";
        this.abbr = "";
        this.featured = false;
        this.description = "";
    }
}
