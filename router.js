var express = require('express'),
    submit = require('./endpoint/submit'),
    result = require('./endpoint/result'),
    login = require('./endpoint/login'),
    multer = require('multer'),
    upload = multer({
        dest: 'tmp/',
        limits: {
            fileSize: 2 * 1024 * 1024
        }
    }),
    router = express.Router();

router.get('/submit', submit.submit);
router.get('/login', login.loginBegin);

router.post('/result', upload.any(), result.result);
router.post('/login', upload.any(),login.loginEnd);

module.exports = router;