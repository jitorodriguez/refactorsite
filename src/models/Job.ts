class Job {
    id: string;
    title: string;
    date: string;
    specifications: string;
    description: string;
    specifics: string[];
    contact: string[];

    constructor(title: string, dateRange: string, specifications: string, description: string, specifics: string[], contact: string[]){
        this.id = title;
        this.title = title;
        this.date = dateRange;
        this.specifications = specifications;
        this.description = description;
        this.specifics = specifics
        this.contact = contact;
    }
}

export default Job;