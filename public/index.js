var tripsList = [];
var trips = document.getElementsByClassName('trip');

createTripsList();

function createTripsList() {
    for (var x = 0; x < trips.length; x++) {
        tripsList.push([]);
        tripsList[x].push(trips[x].getAttribute('data-title'));
        tripsList[x].push(trips[x].children[0].children[1].children[0].src);
        tripsList[x].push(trips[x].children[0].children[0].children[0].getAttribute('id'));

        var date = trips[x].children[0].children[2].children[1].textContent;
        
        var startendDate = date.split(' - ');
        var startDate = startendDate[0].split(' ');
        var endDate = startendDate[1].split(' ');
        tripsList[x].push(startDate[0]);
        tripsList[x].push(startDate[1]);
        tripsList[x].push(startDate[2]);
        tripsList[x].push(endDate[0]);
        tripsList[x].push(endDate[1]);
        tripsList[x].push(endDate[2]);
    
        var locationVal = trips[x].children[0].children[2].children[2].textContent;  
 
        var places = locationVal.split(' ');
        tripsList[x].push(places[0]);
        tripsList[x].push(places[1]);
        tripsList[x].push(places[2]);
    
        tripsList[x].push(trips[x].children[0].children[2].children[3].textContent);
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
        tripsList.splice(x, 1);

        for (var i = x; i < trips.length - 1; i++) {
            var currentindex = trips[i].children[0].children[0].children[0].getAttribute('id') - 1;
            trips[i].children[0].children[0].children[0].setAttribute('id', currentindex);
            trips[i].children[0].children[2].children[0].setAttribute('id', currentindex);
        }

        if (trips.length == tripsList.length) {
            tripsList.length = 0;
            createTripsList();
        } else {
            filterTrips();
        }
    }, false);    
}

function getDescription(tripsLength, x) {
    document.getElementsByClassName('trip-title')[tripsLength].addEventListener('click', function() { 
        document.getElementById('modal-backdrop').style.display = 'inline';
        document.getElementById('modal').style.display = 'inline';
        
        var description = document.createElement('div');
        var para = document.createElement('p');
        var p = document.createTextNode(tripsList[x][12]);
        para.appendChild(p);
        para.style.display = 'inline';
        description.appendChild(para);
        document.getElementById('modal').appendChild(description); 
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
    newTrip.setAttribute("data-title", tripsList[x][0]);

    var newTripContent = document.createElement('div');
    newTripContent.className = 'trip-contents';
    newTrip.appendChild(newTripContent);

    var newTripRem = document.createElement('div');
    newTripRem.className = "trip-remove-container";
    newTripContent.appendChild(newTripRem);

    var newRemove = document.createElement('button');
    var removeName = document.createTextNode('X');
    newRemove.className = "trip-remove";
    newRemove.setAttribute("id", x); 
    newRemove.appendChild(removeName);
    newTripRem.appendChild(newRemove);

    var newTripImg = document.createElement('div');
    newTripImg.className = "trip-image-container";
    newTripContent.appendChild(newTripImg);

    var newImg = document.createElement('img');
    newImg.src = tripsList[x][1];
    newTripImg.appendChild(newImg);

    var newTripInfo = document.createElement('div');
    newTripInfo.className = "trip-info-container";
    newTripContent.appendChild(newTripInfo);

    var newButton = document.createElement('button');
    var buttonName = document.createTextNode(tripsList[x][0]);
    newButton.className = "trip-title";
    newButton.setAttribute("id", x); 
    newButton.appendChild(buttonName);
    newTripInfo.appendChild(newButton);

    var newDate = document.createElement('div');
    var date = document.createTextNode(tripsList[x][3] + ' ' + tripsList[x][4] + ' ' + tripsList[x][5] + ' - ' + tripsList[x][6] + ' ' + tripsList[x][7] + ' ' + tripsList[x][8]);
    newDate.className = "trip-date";
    newDate.appendChild(date);
    newTripInfo.appendChild(newDate);

    var newLocation = document.createElement('div');
    var l = document.createTextNode(tripsList[x][9] + ' ' + tripsList[x][10] + ' ' + tripsList[x][11]);
    newLocation.className = "trip-location";
    newLocation.appendChild(l);
    newTripInfo.appendChild(newLocation);

    var newDescription = document.createElement('p');
    d = document.createTextNode(tripsList[x][12]);
    newDescription.appendChild(d);
    newTripInfo.appendChild(newDescription);
    
    document.getElementById('trips').appendChild(newTrip);
}

function filterTrips() {
    var trips = document.getElementsByClassName('trip');
    var title = document.getElementById('filter-trip-name').value.toLowerCase();
    var startMonth = document.getElementById('filter-start-month').value;
    var startDay = document.getElementById('filter-start-day').value + ','; 
    var startYear = document.getElementById('filter-start-year').value;
    var endMonth = document.getElementById('filter-end-month').value; 
    var endDay = document.getElementById('filter-end-day').value;
    var endYear = document.getElementById('filter-end-year').value;   
    var country = document.getElementById('filter-country').value;   

    if (document.getElementById('filter-start-day').value != '') {
        if (document.getElementById('filter-start-day').value > 31 || document.getElementById('filter-start-day').value < 1 ||
            (document.getElementById('filter-start-day').value == 31 && (startMonth == 'Febuary' || startMonth == 'April' || startMonth == 'June' || startMonth == 'September' || startMonth == 'November')) ||
            (document.getElementById('filter-start-day').value == 29 && startMonth == 'Febuary' && startYear % 4 > 0)) {

            alert("Invalid start date");
        }
    } else if (document.getElementById('filter-end-day').value != '') {
        if (document.getElementById('filter-end-day').value > 31 || document.getElementById('filter-end-day').value < 1 ||
               (document.getElementById('filter-end-day').value == 31 && (endMonth == 'Febuary' || endMonth == 'April' || endMonth == 'June' || endMonth == 'September' || endMonth == 'November')) ||
               (document.getElementById('filter-end-day').value == 29 && endMonth == 'Febuary' && endYear % 4 > 0)) {
        
        alert("Invalid end date");
        }
    } else {
        while (trips.length > 0) {
            trips[0].remove();
        }
    
        var tripsLength = 0;
  
        for (var x = 0; x < tripsList.length; x++) {
            if (tripsList[x][0].toLowerCase().includes(title) &&
                tripsList[x][3].includes(startMonth) &&
                tripsList[x][4].includes(startDay) &&
                tripsList[x][5].includes(startYear) &&
                tripsList[x][6].includes(endMonth) &&
                tripsList[x][7].includes(endDay) &&
                tripsList[x][8].includes(endYear) &&
                tripsList[x][11].includes(country)) {
    
                insertTrip(x);
                removeTrip(tripsLength, x);
                getDescription(tripsLength, x);
                tripsLength++;
            }
        }
    }
}

document.getElementById('filter-update-button').addEventListener('click', function() { filterTrips() });