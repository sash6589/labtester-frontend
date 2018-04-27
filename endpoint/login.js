var config = require('../config.json');
var request = require('request');
var buildUrl = require('build-url');

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
    var login = req.body.loginInput;
    var password = req.body.passwordInput;
    console.log("Login: " + login);
    console.log("Password: " + password);

    var url = buildUrl(config.host + config.master.port, {
        path: config.master.login,
        queryParams: {
            login: login,
            password: password
        }
    });

    request({
        url: url
    }, function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("Response code " + response.statusCode);
        if (response.statusCode === 200) {
            req.session.login = req.body.loginInput;
            req.session.fullname = '';
            if (typeof req.body.nameInput !== 'undefined') {
                req.session.fullname = req.body.nameInput;
            }

            var redirectPage = req.session.redirectPage;
            res.redirect(redirectPage);
        } else {
            res.render('pages/loginOldWrong', {
                actionUrl: actionUrl
            });
        }
    });
}

exports.loginOld = loginOld;
exports.loginBegin = loginBegin;
exports.loginEnd = loginEnd;