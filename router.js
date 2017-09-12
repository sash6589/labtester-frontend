var express = require('express'),
    submit = require('./endpoint/submit'),
    result = require('./endpoint/result'),
    multer = require('multer'),
    upload = multer({ dest: 'tmp/'}),
    router = express.Router();

router.get('/submit', submit.submit);
router.post('/result', upload.any(), result.result);

module.exports = router;