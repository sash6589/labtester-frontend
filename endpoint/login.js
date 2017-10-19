var config = require('../config.json');


function loginBegin(req, res, next) {
    res.render('pages/login', {
        actionUrl: config.host + config.frontend.port + config.frontend.login
    });
}

function loginEnd(req, res, next) {
    req.session.user = req.body.loginInput;
    res.redirect('/submit');
}

exports.loginBegin = loginBegin;
exports.loginEnd = loginEnd;