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

module.exports.list = function (req, res) {
  var requestOptions, path;
  path = '/api/articles';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function (err, response, responseData) {
      renderHomepage(req, res, responseData);
    }
  );
};
