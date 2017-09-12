var request = require('request');
var buildUrl = require('build-url');

// noinspection JSUnusedLocalSymbols
function result(req, res, next) {
    var gitUrl = req.body.gitUrlInput;
    var problemName = req.body.problemNameList;
    var url = buildUrl('http://localhost:8090', {
        path: 'submit',
        queryParams: {
            gitUrl: gitUrl,
            problemName: problemName
        }
    });

    request(url, function (error, response, body) {
        if (error) {
            throw error;
        }
        var obj = JSON.parse(body);
        res.render('pages/result', {
            testStdout: obj.testStdout,
            testStderr: obj.testStderr,
            codestyleStdout: obj.codestyleStdout,
            codestyleStderr: obj.codestyleStderr,
            fileTestsResult: obj.fileTestsResult
        });
    });
}

exports.result = result;
