var path = require('path');
var course = require('../controllers/course.js');

module.exports = function(app) {
    app.get('/courses', function(req, res) {
        // get all courses
        course.getAllCourses(req, res)
    });
    app.post('/course', function(req, res) {
        // Creates a new course.
        course.create(req, res)
    });
    // app.get('/polls/:id', function(req, res) {
    //     polls.getOnePoll(req, res)
    // });
    // app.put('/polls/:id', function(req, res) {
    //     polls.updatePoll(req, res);
    // });
    // app.delete('/polls/:id', function(req, res) {
    //     polls.deletePoll(req, res);
    // });
    app.all("*", (request, response) => { response.sendFile(path.resolve("../client/dist/index.html")) });
}