var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 80;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next) {
  res.status(200).render('homePage');
});

app.get('/index.html', function(req, res, next) {
  res.status(200).render('homePage');
});

app.get('/trip.html', function(req, res, next) {
  res.status(200).render('trip', {
     sitetitle: "Benny's Tripz",
     pagetitle: "Plan a Trip"
   });
});

app.get('/gallery.html', function(req, res, next) {
  res.status(200).render('gallery');
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('404', {
    url: req.url
  });
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
