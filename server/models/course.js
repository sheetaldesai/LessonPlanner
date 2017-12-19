var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = mongoose.Schema({
    teacher: {type: String, required: [true, "Teacher is required"]},
    description: {type: String, required: false},
    startDate: {type: Date, required: [true, "Start date is required"]},
    endDate: {type: Date, required: [true, "End date is required"]},
    lessonDuration: {type: Number}, //in minutes;
    topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}]
}, {timestamps: true}, {usePushEach: true});

mongoose.model('Course', CourseSchema);