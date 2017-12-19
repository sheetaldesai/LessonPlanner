var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = mongoose.Schema({
    title: {type: String, required: [true, "Title is required"]},
    lessonDate: {type: Date, required: false},
    category: {type: String},
    duration: {type: Number}, //in minutes
    resources: {type: String[], required: false},
    _course: {type: Schema.Types.ObjectId, ref: 'Course'}
}, {timestamps: true}, {usePushEach: true});

mongoose.model('Topic', TopicSchema);