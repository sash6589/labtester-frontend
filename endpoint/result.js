var request = require('request');
var buildUrl = require('build-url');
var formidable = require('formidable');
var fs = require('fs');

// noinspection JSUnusedLocalSymbols
function result(req, res, next) {
    var form = new formidable.IncomingForm({
        uploadDir: __dirname + '/../tmp',
        keepExtensions: true
    });
    form.parse(req, function (err, fields, files) {
        if (err) {
            throw err;
        }
        if (fields.gitUrlInput === '') {
            submitWithFile(res, fields, files);
        } else {
            submitWithUrl(res, fields);
        }
    });
}

function submitWithUrl(res, fields) {
    var gitUrl = fields.gitUrlInput;
    var problemName = fields.problemNameList;
    var url = buildUrl('http://localhost:8090', {
        path: 'submit',
        queryParams: {
            gitUrl: gitUrl,
            problemName: problemName
        }
    });

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        sendResult(res, error, response, body);
    });
}

function submitWithFile(res, fields, files) {
    var url = buildUrl('http://localhost:8090', {
        path: 'submit'
    });
    var problemName = fields.problemNameList;
    fs.readFile(files.upload.path, function (err, data) {
        if (err) {
            throw err;
        }
        request.post({
            url: url,
            json: {
                "problemName": problemName,
                "program": data.toString()
            }
        }, function (error, response, body) {
            sendResult(res, error, response, body);
        });
    });
}

function sendResult(res, error, response, body) {
    if (error) {
        throw error;
    }
    res.render('pages/result', {
        testStdout: body.testStdout,
        testStderr: body.testStderr,
        codestyleStdout: body.codestyleStdout,
        codestyleStderr: body.codestyleStderr,
        fileTestsResult: body.fileTestsResult
    });
}

exports.result = result;
