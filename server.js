var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var tripsData = require('./tripsData.json');
// console.log(tripsData[0].images);

var app = express();
var port = process.env.PORT || 80;

app.engine('handlebars', exphbs({ defaultLayout: null}));
app.set('view engine', 'handlebars');

// var imageEntery = {
//   photoURL: '',
//   caption: ''
// }

function imageEntery(photoURL, caption) {
  this.photoURL = photoURL;
  this.caption = caption;
}

function getImages() {
  var combinedImagesArray = [];

  for (var i = 0; i < tripsData.length; i++) {
    for (var j = 0; j < tripsData[i].images.length; j++) {
      combinedImagesArray = combinedImagesArray.concat(new imageEntery(tripsData[i].images[j], tripsData[i].tripTitle));
    }
  }

  return combinedImagesArray;
}

var imagesArray = getImages();
console.log(imagesArray);


app.get('/', function(req, res, next) {
  res.status(200).render('homePage');
});

app.get('/index.html', function(req, res, next) {
  res.status(200).render('homePage', {
    // pagetitle: "Home"
    tripData: tripsData
  });
});

app.get('/trip.html', function(req, res, next) {
  res.status(200).render('trip', {
     // sitetitle: "Benny's Tripz",
     pagetitle: "Plan a Trip"
   });
});

app.get('/gallery.html', function(req, res, next) {
  res.status(200).render('gallery', {
    // pagetitle: "Gallery",
    photos: imagesArray
    // caption: "Some photo"
  });
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
