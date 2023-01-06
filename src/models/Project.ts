class Project {
    id: string;
    title: string;
    specifications: string;
    description: string;
    images: Array<string>;
    link: string;
    linkText: string;

    constructor(title: string, specifications: string, description: string, images: Array<string>, link: string = "", linkText: string = ""){
        this.id = title;
        this.title = title;
        this.specifications = specifications;
        this.description = description;
        this.images = images;
        this.link = link;
        this.linkText = linkText;
    }
}

export default Project;