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
            console.log("Error while getting all courses: ",err);
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
    },
    getCourse: (req, res) => {
        var id = req.params.id;
        console.log("Get course id: ", id);
        Course.find({_id:id}).then(function(course){
            res.json(course);
        }).catch(function(err){
            console.log("Error while getting course with id ", id, err);
            res.json(err);
        });
    },
    editCourse: (req, res) => {
        
        var id = req.body._id;
        console.log("edit course ", req.body);
        // Course.findById(req.body._id, function(err, course){
        //     console.log("found course: ", course);
        //     course.title = req.body.title;
        //     course.description = req.body.description;
        //     course.startDaate = req.body.startDaate;
        //     course.endDate = req.body.endDate;
        //     course.meetingDays = req.meetingDays;
        //     course.save(function(err) {
        //         if (err) {
        //             console.log("Error updaing course ", err);
        //             res.json(err);
        //         } else {
        //             console.log("saved the course");
        //             res.json('success');
        //         }
        //     });
        // }).catch(function(err){
        //     console.log("Error while getting course ",err);
        //     res.json(err);
       
        Course.update({_id: id}, {
            title : req.body.title,
            description : req.body.description,
            startDaate : req.body.startDaate,
            endDate : req.body.endDate,
            meetingDays : req.body.meetingDays
        }, function(err, numberAffected, rawResponse){
            if (err) {
                console.log("Error updating course ", err)
                res.json(err);
            } else if (rawResponse) {
                console.log("Updated course: ",rawResponse);
                res.json('success');
            }
        })
    },

    deleteCourse: (req, res) => {
        var id = req.params.id;
        console.log("deleting course: ", id);
        Course.remove({_id: id}, function(err, any){
            if (err) {
                res.json({status:'Error while removing course'});
            } else {
                console.log("deleted course");
                res.json({status: 'Success'});
            }
        });
    }
}