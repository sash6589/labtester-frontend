module.exports = function (app) {
    var router = require('./router'),
        fs = require('fs'),
        dir = __dirname + '/tmp';


    app.set('view engine', 'ejs');

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    router(app);
};
