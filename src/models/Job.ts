class Job {
    id: string;
    title: string;
    specifications: string;
    description: string;
    specifics: string[];

    constructor(title: string, specifications: string, description: string, specifics: string[]){
        this.id = title;
        this.title = title;
        this.specifications = specifications;
        this.description = description;
        this.specifics = specifics
    }
}

export default Job;