class Project {
    id: string;
    title: string;
    specifications: string;
    description: string;

    constructor(title: string, specifications: string, description: string){
        this.id = title;
        this.title = title;
        this.specifications = specifications;
        this.description = description;
    }
}

export default Project;