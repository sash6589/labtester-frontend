var path = require('path');
var request = require('request');
var config = require('../config.json');
var baseurl = config.master.url + config.master.problems;

// noinspection JSUnusedLocalSymbols
function submit(req, res, next) {
    console.log('Request handler \'start\' was called');
    console.log(baseurl);
    request(baseurl, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }

        var obj = JSON.parse(body);
        res.render('pages/submit', {
            problemNames: obj,
            actionUrl: config.frontend.url + config.frontend.result
        });
    });
}

exports.submit = submit;