// Generated by CoffeeScript 1.5.0
(function() {
  var app, express, readability;

  express = require('express');

  readability = require('node-readability');

  app = express();

  app.use(express["static"](__dirname + '/public'));

  app.use(app.router);

  app.use(function(err, req, res, next) {
    return res.send(500, 'Internal server error');
  });

  app.get('/article/:url', function(req, res, next) {
    return readability.read(req.params.url, function(err, article) {
      if (err) {
        return next(err);
      }
      res.type('text/plain');
      return res.send(200, article.getContent().replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' '));
    });
  });

  app.listen(3001);

}).call(this);
