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

function renderDetailpage(req, res, responseBody) {
  res.render('article', {
    title: 'Article',
    article: responseBody
  });
}

function renderEditpage(req, res, responseBody) {
  res.render('edit', {
    title: 'Edit',
    article: responseBody
  });
}

/* article detail page. */
module.exports.detail = function(req, res, next) {
  var requestOptions, path, postdata;
  path = '/api/articles/' + req.params.articleid;
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function (err, response, body) {
      renderDetailpage(req, res, body);
    }
  );
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
    function (err, response, body) {
      if (response.statusCode === 201) {
        var id = body.articleid;
        res.redirect('/article/' + id);
      }
  });
};

/* edit article page. */
module.exports.edit = function(req, res, next) {
  var requestOptions, path, postdata;
  path = '/api/articles/' + req.params.articleid;
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function (err, response, body) {
      renderEditpage(req, res, body);
    }
  );
};

/* update article. */
module.exports.update = function(req, res, next) {
  var requestOptions, path, postdata;
  path = '/api/articles/' + req.params.articleid;
  postdata = {
    title: req.body.title,
    text: req.body.text
  };    
  requestOptions = {
    url: apiOptions.server + path,
    method: "PUT",
    json: postdata
  };
  request(
    requestOptions,
    function (err, response, body) {
        var id = body.articleid;
        res.redirect('/article/' + id);
    });
};

/* delete article. */
module.exports.delete = function(req, res, next) {
  var requestOptions, path;
  path = '/api/articles/' + req.params.articleid;   
  requestOptions = {
    url: apiOptions.server + path,
    method: "DELETE",
    json: {}
  };
  request(
    requestOptions,
    function (err, response, body) {   
        if(body == null){
          res.redirect('/');
        }
    });
};