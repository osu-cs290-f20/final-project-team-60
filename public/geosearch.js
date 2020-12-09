// This file contains all the javascript for the geosearch (searchbar) and map (leaflet)


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


const provider = new GeoSearch.OpenStreetMapProvider();

const form = document.querySelector('form');
const input = form.querySelector('input[type="text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const results = await provider.search({ query: input.value });
  console.log(results); // » [{}, {}, {}, ...]

  map.setView([results[0].y, results[0].x], 6);

  var resultDiv = document.getElementById("results");

  var textNode = results[0].label;

  var t = textNode.toString();
  console.log(textNode);

  resultDiv.innerHTML = "";

  resultDiv.insertAdjacentHTML( 'afterbegin', t );

  document.getElementById("trip-plan-forum").style.display = "block";
  document.getElementById("button-close").style.display = "inline";

});
