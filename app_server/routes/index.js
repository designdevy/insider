var express = require('express');
var router = express.Router();
var mainContr = require('../controllers/main');
var articlesContr = require('../controllers/articles');

/*if (process.env.NODE_ENV === 'production') {
 apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}*/

/* Main Articles Page. */
router.get('/', mainContr.list);

/* Show New Article Page. */
router.get('/article/new', articlesContr.new);

/* Post New Article Page. */
router.post('/article/new', articlesContr.add);

/* Article Detail Page. */
router.get('/article/:articleid', articlesContr.detail);

/* Edit Article Page. */
router.get('/article/:articleid/edit', articlesContr.edit);

/* Article Update Page. */
router.post('/article/:articleid/edit', articlesContr.update);

module.exports = router;
