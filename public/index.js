var tripsList = [];
var trips = document.getElementsByClassName('trip');

createTripsList();

function createTripsList() {
    for (var x = 0; x < trips.length; x++) { 
        tripsList.push([]);
        tripsList[x].push(trips[x].children[0].children[3].children[3].textContent);
        tripsList[x].push(trips[x].children[0].children[1].children[0].src);
        tripsList[x].push(trips[x].children[0].children[3].children[1].children[1].textContent);
        tripsList[x].push(trips[x].children[0].children[3].children[2].children[1].textContent);
        tripsList[x].push(trips[x].children[0].children[2].children[0].src);
        tripsList[x].push(trips[x].getAttribute('data-lat'));
        tripsList[x].push(trips[x].getAttribute('data-long'));
    }

    while (trips.length > 0) {
        trips[0].remove();
    }

    for (var x = 0; x < tripsList.length; x++) {
        insertTrip(x);
        removeTrip(x, x);
        getDescription(x, x);
    }
}

function removeTrip(tripsLength, x) {
    document.getElementsByClassName('trip-remove')[tripsLength].addEventListener('click', function() { 
        trips[tripsLength].remove();

        var tripReq = new XMLHttpRequest();
        reqURL = "/index.html/deleteTrip";
        tripReq.open('DELETE', reqURL);
/*
        var tripBody = JSON.stringify({
            tripPostImage: tripsList[x][1],
            tripStartDate: tripsList[x][2],
            tripEndDate: tripsList[x][3],
            location: tripsList[x][0],
            latitude: tripsList[x][5],
            longitude: tripsList[x][6],
            mapImage: tripsList[x][4]
        });

        tripReq.setRequestHeader('Content-Type', 'application/json');
        tripReq.send(tripBody);
*/
        tripsList.splice(x, 1);

        for (var i = x; i < trips.length - 1; i++) {
            var currentindex = trips[i].children[0].children[0].children[0].getAttribute('id') - 1;
            trips[i].children[0].children[0].children[0].setAttribute('id', currentindex);
            trips[i].children[0].children[2].children[0].setAttribute('id', currentindex);
        }

        if (trips.length == tripsList.length) {
            tripsList.length = 0;
            createTripsList();
        }
    }, false);    
}

function getDescription(tripsLength, x) {
    document.getElementsByClassName('trip-title')[tripsLength].addEventListener('click', function() { 
        document.getElementById('modal-backdrop').style.display = 'inline';
        document.getElementById('modal').style.display = 'inline';

        if (document.getElementById('modal').children.length == 2) {
            document.getElementById('modal').children[1].remove();
        }
        
        var map = document.createElement('div');
        var mapURL = document.createElement('img');
        mapURL.src = tripsList[x][4];
        map.appendChild(mapURL);
        document.getElementById('modal').appendChild(map); 

    }, false);
}

document.getElementById('modal-close').addEventListener('click', function() {
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('modal').style.display = 'none';

    document.getElementById('modal').children[1].remove();
});

function insertTrip(x) {
    var newTrip = document.createElement('div');
    newTrip.className = 'trip';
    newTrip.setAttribute('data-title', tripsList[x][0]);
    newTrip.setAttribute('data-lat', tripsList[x][5]);
    newTrip.setAttribute('data-long', tripsList[x][6]);

    var newTripContent = document.createElement('div');
    newTripContent.className = 'trip-contents';
    newTrip.appendChild(newTripContent);

    var newTripRem = document.createElement('div');
    newTripRem.className = "trip-remove-container";
    newTripContent.appendChild(newTripRem);

    var newRemove = document.createElement('button');
    var removeName = document.createTextNode('X');
    newRemove.className = "trip-remove";
    newRemove.appendChild(removeName);
    newTripRem.appendChild(newRemove);

    var newTripImg = document.createElement('div');
    newTripImg.className = "trip-image-container";
    newTripContent.appendChild(newTripImg);

    var newImg = document.createElement('img');
    newImg.src = tripsList[x][1];
    newTripImg.appendChild(newImg);

    var newTripMap = document.createElement('div');
    newTripMap.className = "trip-map-container";
    newTripMap.setAttribute('id', 'hidden');
    newTripContent.appendChild(newTripMap);

    var newMap = document.createElement('img');
    newMap.src = tripsList[x][4];
    newTripMap.appendChild(newMap);    

    var newTripInfo = document.createElement('div');
    newTripInfo.className = "trip-info-container";
    newTripContent.appendChild(newTripInfo);

    var newButton = document.createElement('button');
    var buttonName = document.createTextNode(tripsList[x][0]);
    newButton.className = "trip-title";
    newButton.appendChild(buttonName);
    newTripInfo.appendChild(newButton);

    var newStartDate = document.createElement('div');
    var startTitle = document.createElement('span');
    var startTNode = document.createTextNode('Start Date: ');
    var startdate = document.createElement('span');
    var startDNode = document.createTextNode(tripsList[x][2]);
    startdate.className = "trip-start-date";
    startTitle.appendChild(startTNode);
    startdate.appendChild(startDNode);
    newStartDate.appendChild(startTitle);
    newStartDate.appendChild(startdate);
    newTripInfo.appendChild(newStartDate);

    var newEndDate = document.createElement('div');
    var endTitle = document.createElement('span');
    var endTNode = document.createTextNode('End Date: ');
    var enddate = document.createElement('span');
    var endDNode = document.createTextNode(tripsList[x][3]);
    enddate.className = "trip-end-date";
    endTitle.appendChild(endTNode);
    enddate.appendChild(endDNode);
    newEndDate.appendChild(endTitle);
    newEndDate.appendChild(enddate);
    newTripInfo.appendChild(newEndDate);

    var newLocation = document.createElement('div');
    var l = document.createTextNode(tripsList[x][0]);
    newLocation.className = "trip-location";
    newLocation.appendChild(l);
    newTripInfo.appendChild(newLocation);
    
    document.getElementById('trips').appendChild(newTrip);
}

function filterTrips() {
    var trips = document.getElementsByClassName('trip');
    var title = document.getElementById('filter-trip-name').value.toLowerCase();
    var startDate = document.getElementById('filter-start-date').value;
    var endDate = document.getElementById('filter-end-date').value;  
    var country = document.getElementById('filter-trip-name').value;   

    while (trips.length > 0) {
        trips[0].remove();
    }

    var tripsLength = 0;

    for (var x = 0; x < tripsList.length; x++) {
        if (tripsList[x][0].toLowerCase().includes(title) &&
            tripsList[x][2].includes(startDate) &&
            tripsList[x][3].includes(endDate) &&
            tripsList[x][0].includes(country)) {

            insertTrip(x);
            removeTrip(tripsLength, x);
            getDescription(tripsLength, x);
            tripsLength++;
        }
    }
}

document.getElementById('filter-update-button').addEventListener('click', function() { filterTrips() });