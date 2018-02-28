import { Topic } from './topic';
export class Course {
   createdAt: Date;
   updatedAt: Date;
    constructor(
        public _id: String = "",
        public teacher: String = "",
        public title: String = "",
        public description: String = "",
        public startDate: Date = new Date(),
        public endDate: Date = new Date(),
        public meetingDays: Number[] = [],
        public lessonDuration: Number = 0, // in minutes
        public topics: Topic[] = [],
    ) {}

}
