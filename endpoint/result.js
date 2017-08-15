var request = require('request');

var baseurl = 'http://localhost:8090/submit?gitUrl=';

// noinspection JSUnusedLocalSymbols
function result(req, res, next) {
    request(baseurl + req.body.gitUrlInput, function (error, response, body) {
        if (error) {
            throw error;
        }
        var obj = JSON.parse(body);
        res.render('pages/result', {
            testStdout: obj.testStdout,
            testStderr: obj.testStderr,
            codestyleStdout: obj.codestyleStdout,
            codestyleStderr: obj.codestyleStderr
        });
    });
}

exports.result = result;
