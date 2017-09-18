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

            throw error;
        }

        var obj = JSON.parse(body);
        res.render('pages/submit', {
            problemNames: obj
        });
    });
}

exports.submit = submit;