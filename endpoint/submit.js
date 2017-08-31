var path = require('path');
var request = require('request')

var baseurl = 'http://localhost:8090/problems'

// noinspection JSUnusedLocalSymbols
function submit(req, res, next) {
    console.log("Request handler 'start' was called");

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