import { Course } from './course';
export class Topic {
    public createdAt: Date;
    public updatedAt: Date;
    constructor (
        public _id: String,
        public title: String,
        public lessonDate: Date,
        public category: String,
        public duration: Number, // in minutes
        public subTopics : String[],
        public resources: String[],
        public _course: String,
    ) {}
}
