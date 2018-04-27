var config = require('../config.json');
var request = require('request');
var buildUrl = require('build-url');

var masterUrl = config.host + config.master.port;

function addProblem(req, res, next) {
    res.render('pages/addProblem', {
        username: "lol",
        actionUrl: config.host + config.frontend.port + config.frontend.addProblem
    })
}

function addProblemPost(req, res, next) {
    var fields = req.body;

    var problemName = fields.problemNameInput;

    var languagesInput = fields.languagesInput;
    var languages = languagesInput.split(' ');

    var checkCodestyle = Boolean(fields.checkCodeStyleCheckbox);
    var checkCodeStyleCommand = fields.checkCodeStyleCommandInput;

    var runTests = Boolean(fields.runTestsCheckbox);
    var runTestsUrl = fields.runTestsUrlInput;
    var runTestsCommand = fields.runTestsCommandInput;

    var runFileTests = Boolean(fields.runFileTestsCheckbox);
    var runFileTestsUrl = fields.runFileTestsUrlInput;
    var runFileTestsCommand = fields.runFileTestsCommandInput;

    var url = buildUrl(masterUrl, {
        path: config.master.problem
    });

    var problem = {
        name: problemName,
        languages: languages,
        checkCodestyle: checkCodestyle,
        checkCodestyleCommand: checkCodeStyleCommand,
        runTests: runTests,
        runTestsUrl: runTestsUrl,
        runTestsCommand: runTestsCommand,
        runFileTests: runFileTests,
        runFileTestsUrl: runFileTestsUrl,
        runFileTestsCommand: runFileTestsCommand
    };

    request.post({
        url: url,
        json: [problem]
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        res.status(200).send('Задача добавлена');
    })
}

exports.addProblem = addProblem;
exports.addProblemPost = addProblemPost;
