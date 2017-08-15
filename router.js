var submit = require('./endpoint/submit'),
    result = require('./endpoint/result');

module.exports = function (app) {
    app.get('/submit', submit.submit);
    app.post('/result', result.result);
};
