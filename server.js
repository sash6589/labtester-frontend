var express, app, middleware;
express = require('express');
app = express();

app.use(require('./router'));

middleware = require('./middleware')(app, express);

app.listen(8888, function () {
    console.log('Server has started');
});
