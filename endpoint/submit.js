var path = require('path');
var request = require('request');
var config = require('../config.json');
var baseurl = config.host + config.master.port + config.master.problems;

// noinspection JSUnusedLocalSymbols
function submit(req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
        return
    }
    var user = req.session.user;

    request(baseurl, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }

        var obj = JSON.parse(body);
        res.render('pages/submit', {
            username: user,
            problemNames: obj,
            actionUrl: config.host + config.frontend.port + config.frontend.result
        });
    });
}

exports.submit = submit;