var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};

function renderHomepage(req, res, responseBody) {
  res.render('index', {
    title: 'Insider',
    articles: responseBody
  });
}

/* article detail page. */
module.exports.detail = function(req, res, next) {
  res.render('article', {title: 'Article'})
};

/* show article page. */
module.exports.new = function(req, res, next) {
  res.render('new', {title: 'New'});
};

/* add article page. */
module.exports.add = function(req, res, next) {
  var requestOptions, path, postdata;
  path = '/api/articles/new';
  postdata = {
    title: req.body.title,
    text: req.body.text
  };    
  requestOptions = {
    url: apiOptions.server + path,
    method: "POST",
    json: postdata
  };
  request(
    requestOptions,
    function (err, response, responseData) {
      console.log(responseData);
    }
  );
};

/* edit article page. */
module.exports.edit = function(req, res, next) {
  res.render('edit', {title: 'Edit'});
};

