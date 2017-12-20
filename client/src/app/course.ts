import { Topic } from './topic';
export class Course {
   createdAt: Date;
   updatedAt: Date;
    constructor(
        public _id: String,
        public teacher: String,
        public title: String,
        public description: String,
        public startDate: Date,
        public endDate: Date,
        public meetingDays: Number[],
        public lessonDuration: Number, // in minutes
        public topics: Topic[],
    ) {}

}
