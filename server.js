var express, app, middleware;
express = require('express');
app = express();

middleware = require('./middleware')(app, express);

app.use(require('./router'));

app.listen(8888, function () {
    console.log('Server has started');
});
