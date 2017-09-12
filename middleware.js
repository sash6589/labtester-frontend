module.exports = function (app) {
    var router = require('./router'),
        bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.set('view engine', 'ejs');

    router(app);
};
