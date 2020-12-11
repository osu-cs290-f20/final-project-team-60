// This file contains all the javascript for the geosearch (searchbar) and map (leaflet)




//  This code snippet is from the leaflet github documentation and initializes a basic map
// https://github.com/Leaflet/Leaflet

var map = L.map('mapid', {
    // Set latitude and longitude of the map center (required)
    center: [30, -30],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 1
});

L.control.scale().addTo(map);

// Create a Tile Layer and add it to the map
//var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

// The code snippet below is from the leaflet-geosearch documentation, and has been modified to suite the needs of our website
// The next 3 lines of code initialize our search box as a functional map searchbar
//https://github.com/smeijer/leaflet-geosearch

const provider = new GeoSearch.OpenStreetMapProvider();
const form = document.querySelector('form');
const input = form.querySelector('input[type="text"]');

var long;
var lat;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

document.getElementById("trip-create-success").style.display = "none";

  const results = await provider.search({ query: input.value });
  console.log(results); // » [{}, {}, {}, ...]

  map.setView([results[0].y, results[0].x], 6);

  lat = results[0].y;
  long = results[0].x;
  console.log("Long = ", long, "Lat = ", lat);

  var resultDiv = document.getElementById("results");

  var textNode = results[0].label;

  var t = textNode.toString();
  console.log(textNode);

  resultDiv.innerHTML = "";

  resultDiv.insertAdjacentHTML( 'afterbegin', t );

// The following code snippet is from leafletImage, which converts a leaflet map into an image file.
// This is a basic function from the example in their readme.md modified to insert the image in the correct place on our website
// https://github.com/mapbox/leaflet-image

  leafletImage(map, function(err, canvas) {
    // now you have canvas
    // example thing to do with that canvas:
    var img = document.createElement('img');
    img.setAttribute("id", "tempimg");
    var dimensions = map.getSize();
    img.width = dimensions.x;
    img.height = dimensions.y;
    img.src = canvas.toDataURL();
    document.getElementById('tripimg').innerHTML = '';
    document.getElementById('tripimg').appendChild(img);
  });

  document.getElementById("trip-plan-forum").style.display = "block";
  document.getElementById("button-close").style.display = "inline";

});

//Cancel/X button for planning a trip.
var x = document.getElementById("button-close");
var cancel = document.getElementById("cancel-trip-button");

function removeLocation() {

var location = document.getElementById("results");
location.innerHTML = "";

x.style.display = "none"
document.getElementById("trip-plan-forum").style.display = "none"
}

x.addEventListener("click", removeLocation);
cancel.addEventListener("click", removeLocation);

function insertNewPost() {

  // var date1 = new Date(document.getElementById("trip-start-date").value);
  // var date2 = new Date(document.getElementById("trip-end-date").value);
  //
  // var diffTime = date2 - date1;
  // console.log("Difftime", diffTime);
  // var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  var postRequest = new XMLHttpRequest();
  var reqURL = "/trip.html/addTrip";
  postRequest.open('POST', reqURL);

// var context = JSON.stringify({

// var postImage;
//

var img = document.getElementById("tempimg");

var images = [document.getElementById("trip-image-url-input").value];


var context = JSON.stringify({
location: document.getElementById("results").innerText,
tripStartDate: document.getElementById("trip-start-date").value,
tripEndDate: document.getElementById("trip-end-date").value,
longitude: long,
latitude: lat,
images: images,
postTitleImage: document.getElementById("trip-image-url-input").value,
mapImage: img.src
});

//tripPostImage:

// });

postRequest.setRequestHeader('Content-Type', 'application/json' );
postRequest.send(context);

// var postCardHTML = Handlebars.templates.tripEntery(context);
//
// var postContainer = document.getElementById('mytrips');
//
// postContainer.insertAdjacentHTML("beforeend", postCardHTML);
//
//
// return postCardHTML;

if(!document.getElementById("trip-start-date").value || !document.getElementById("trip-end-date").value ||  !document.getElementById("trip-image-url-input").value)
{
  alert("You have not filled in all of the fields properly!");
}

else {
  document.getElementById("trip-plan-forum").style.display = "none";
  document.getElementById("button-close").style.display = "none";
  document.getElementById("trip-create-success").style.display = "inline";
}

}

document.getElementById("add-trip-button").addEventListener("click", insertNewPost);
