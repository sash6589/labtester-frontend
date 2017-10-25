var request = require('request');
var buildUrl = require('build-url');
var fs = require('fs');
var config = require('../config.json');

var masterUrl = config.host + config.master.port;

// noinspection JSUnusedLocalSymbols
function result(req, res, next) {
    if (req.body.gitUrlInput === '') {
        submitWithFile(req, res);
    } else {
        submitWithUrl(req, res);
    }
}

function submitWithUrl(req, res) {
    var fields = req.body;

    var gitUrl = fields.gitUrlInput;
    var problemName = fields.problemNameList;
    var language = fields.languagesList;
    var url = buildUrl(masterUrl, {
        path: config.master.submit,
        queryParams: {
            username: req.session.user,
            gitUrl: gitUrl,
            problemName: problemName,
            language: language
        }
    });

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        sendResult(res, error, response, body);
    });
}

function submitWithFile(req, res) {
    var fields = req.body;
    var file = req.files[0];

    var problemName = fields.problemNameList;
    var language = fields.languagesList;

    var url = buildUrl(masterUrl, {
        path: config.master.submit,
        queryParams: {
            username: req.session.user,
            language: language
        }
    });

    fs.readFile(file.path, function (err, data) {
        if (err) {
            console.log(err);
            return;
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
        fs.unlinkSync(file.path);
    });
}

function sendResult(res, error, response, body) {
    if (error) {
        console.log(error);
        return;
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
