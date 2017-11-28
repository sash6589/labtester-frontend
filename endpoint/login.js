var config = require('../config.json');

var actionUrl = config.host + config.frontend.port + config.frontend.login;

function loginOld(req, res, next) {
    res.render('pages/loginOld', {
       actionUrl: actionUrl
    });
}

function loginBegin(req, res, next) {
    res.render('pages/login', {
        actionUrl: actionUrl
    });
}

function loginEnd(req, res, next) {
    req.session.login = req.body.loginInput;
    req.session.fullname = '';
    if (typeof req.body.nameInput !== 'undefined') {
        req.session.fullname = req.body.nameInput;
    }

    res.redirect('/submit');
}

exports.loginOld = loginOld;
exports.loginBegin = loginBegin;
exports.loginEnd = loginEnd;