var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('Hello from Express JS!'));

module.exports = router;
