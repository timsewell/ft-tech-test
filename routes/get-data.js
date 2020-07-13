var express = require('express');
var router = express.Router();
var requestMultipleFiles = require('../bin/request-multiple-files');
var urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

router.get('/', async function(req, res) {
    const data = await requestMultipleFiles(urls);
    res.send(data);
});

module.exports = router;