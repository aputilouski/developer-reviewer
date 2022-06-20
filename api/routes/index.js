var express = require('express');
var router = express.Router();
const { MemeModel } = require('../models');

router.get('/', (req, res) => res.send('Hello from Express JS!'));

router.get('/posts', async (req, res) => {
  try {
    const { limit, page } = req.query;
    const offset = (page - 1) * limit;

    const { rows, count } = await MemeModel.findAndCountAll({ offset, limit });

    res.json({ rows, count });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message || 'Some error occurred while fetching posts.');
  }
});

module.exports = router;
