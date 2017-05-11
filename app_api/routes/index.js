var express = require('express');
var router = express.Router();
var apiarticlesContr = require('../controllers/articles');

// articles
router.get('/articles', apiarticlesContr.articlesShowAll);
router.get('/articles/:articleid', apiarticlesContr.articlesRead);

router.post('/articles/new', apiarticlesContr.articlesCreate);
router.put('/articles/:articleid', apiarticlesContr.articlesUpdate);
router.delete('/articles/:articleid', apiarticlesContr.articlesDelete);

module.exports = router;