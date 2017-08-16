var express, app, middleware;
express = require('express');
app = express();
middleware = require('./middleware')(app, express);


app.listen(8888, function () {
    console.log('Server has started');
});
