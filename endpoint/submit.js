var request = require('request');
var config = require('../config.json');
var baseurl = config.host + config.master.port + config.master.problems;

// noinspection JSUnusedLocalSymbols
function submit(req, res, next) {
    if (!req.session.login) {
        res.redirect('/loginold');
        return
    }
    var login = req.session.login;

    request(baseurl, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }

        var names = [];
        var problems = JSON.parse(body);
        for (var i = 0; i < problems.length; ++i) {
            names.push(problems[i].name);
        }

        var languages = problems[0].languages;

        res.render('pages/submit', {
            username: login,
            problemNames: names,
            languages: languages,
            actionUrl: config.host + config.frontend.port + config.frontend.result
        });
    });
}

exports.submit = submit;