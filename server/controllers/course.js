var mongoose = require('mongoose');
var Course = mongoose.model('Course');
var Topic = mongoose.model('Topic');

var path = require('path');

module.exports = {
    getAllCourses: (req, res) => {
        console.log("getAllCourses");
        Course.find({}).then(function (questions){
            //console.log("Found questions: ", questions);
            res.json(questions);
        }).catch(function(err){
            console.log("Error while getting questions: ",err);
            res.json(err);
        });
    },
    create: (req, res) => {
        console.log("add course: ", req.body);

        Course.create(req.body).then(function(newCourse){
            console.log("created course: ", newCourse);
            // Create options:
        }).catch(err=>
            {
                console.log("Error while creating new course", err);
                res.json(err);
            }); 
    }
}