module.exports = function (app) {
    var bodyParser = require('body-parser'),
        fs = require('fs'),
        dir = __dirname + '/tmp';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.set('view engine', 'ejs');

    app.use(function (err, req, res, next) {
        res.status(500).send(err.message)
    })
};
