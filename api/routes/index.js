var express = require('express');
var router = express.Router();
const { MemeModel } = require('../models');

router.get('/', (req, res) => res.send('Hello from Express JS!'));

router.get('/posts', async (req, res) => {

  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 8);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  try {
    const resultPosts = await MemeModel.findAll();
    const rows = resultPosts.slice(startIndex, endIndex);
    res.json({ rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message || 'Some error occurred while fetching posts.');
  }
});

module.exports = router;
