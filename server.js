var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var tripsData = require('./tripsData.json');
// console.log(tripsData[0].images);

var app = express();
var port = process.env.PORT || 80;

app.engine('handlebars', exphbs({ defaultLayout: null}));
app.set('view engine', 'handlebars');

app.use(express.json());

// var imageEntery = {
//   photoURL: '',
//   caption: ''
// }

//an imageEntery object representing a single image card in the gallery page
function imageEntery(photoURL, caption) {
  this.photoURL = photoURL;
  this.caption = caption;
}

//gets each image url and triptitle corresponding to each trip in DB. Then, it inserts them in an array of objects
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

//deleting a trip from the datafile
app.delete('/index.html/deleteTrip', function(req, res, next) {
  console.log(req.body.index);
  //need to recieve an index
  if(req.body.index) {
    //delete tripsData[index]
    tripsData.splice(req.body.index, 1);
    console.log(tripsData);
  }
  else {
    next();
  }
    //update file
    fs.writeFile(__dirname + '/tripsData.json',
      JSON.stringify(tripsData, null, 2),
      function(err, data) {
        if(err) {
          console.log('server error');
          res.status(500).send("error with deleting trip");
        }
        else {
          res.status(200).send("Trip successfully deleted");
        }
      }
    );
  res.status(200).send('Trip deleted');
});

app.get('/trip.html', function(req, res, next) {
  res.status(200).render('trip', {
     // sitetitle: "Benny's Tripz",
     pagetitle: "Plan a Trip"
   });
});

//adding a trip to the datafile
app.post('/trip.html/addTrip', function(req, res, next) {
  console.log("req.body", req.body);
  //if all data is present, push it the tripsData array and append the file with new data
  if(req.body && req.body.tripStartDate && req.body.tripEndDate && req.body.mapImage
  && req.body.location && req.body.latitude && req.body.longitude && req.body.images) {
    tripsData.push({
      tripPostImage: req.body.images[0],
      tripStartDate: req.body.tripStartDate,
      tripEndDate: req.body.tripEndDate,
      location: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      images: req.body.images,
      mapImage: req.body.mapImage
    });
    fs.writeFile(__dirname + '/tripsData.json',
      JSON.stringify(tripsData, null, 2),
      function(err, data) {
        if(err) {
          console.log('server error');
          res.status(500).send("error with adding trip");
        }
        else {
          res.status(200).send("Trip successfully added");
        }
      }
    );
    console.log('Data for trip ' + (tripsData.length-1) + ' :', tripsData[tripsData.length-1]);
    res.status(200).send('Trip added');
  }
  else {
    next();
  }
})

app.get('/gallery.html', function(req, res, next) {
  res.status(200).render('gallery', {
    pagetitle: "Gallery",
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
