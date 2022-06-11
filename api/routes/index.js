var express = require('express');
var router = express.Router();
const { MemeModel } = require('../models');

router.get('/', (req, res) => res.send('Hello from Express JS!'));

router.get('/posts', async (req, res) => {
  try {
    const rows = await MemeModel.findAll();
    res.json({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message || 'Some error occurred while fetching posts.');
  }
});

module.exports = router;
