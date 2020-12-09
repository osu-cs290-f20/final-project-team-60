//This .js file contains javascript for various functions within /trip that are unrelated to the map (pretty much just a couple buttons for now)

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
