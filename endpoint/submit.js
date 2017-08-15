var path = require('path');

// noinspection JSUnusedLocalSymbols
function submit(req, res, next) {
    console.log("Request handler 'start' was called");
    res.sendFile(path.resolve('static/submit/submit.html'));
}

exports.submit = submit;