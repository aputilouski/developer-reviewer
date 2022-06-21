var express = require('express');
var router = express.Router();
const { MemeModel } = require('../models');

router.get('/', (req, res) => res.send('Hello from Express JS!'));

router.get('/posts', async(req, res) => {

    const start = req.query.start;
    const count = req.query.count;

    const startIndex = (start - 1) * count;
    const endIndex = start * count;
    try {
        const posts = await MemeModel.findAll();
        const rows = posts.slice(startIndex, endIndex);
        res.json({ rows });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message || 'Some error occurred while fetching posts.');
    }
});

module.exports = router;