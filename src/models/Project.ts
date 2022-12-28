class Project {
    id: string;
    title: string;
    specifications: string;
    description: string;
    images: Array<string>

    constructor(title: string, specifications: string, description: string, images: Array<string>){
        this.id = title;
        this.title = title;
        this.specifications = specifications;
        this.description = description;
        this.images = images;
    }
}

export default Project;