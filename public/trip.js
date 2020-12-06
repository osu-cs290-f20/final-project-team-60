/*
Notes:
- Trip info:
  - The number of days should be dynamically generated depending on the trip duration
  - Not sure what to do with cities, for now they're just for the user to see where
  - they're going on a given day
  - For the destinations, pressing the + button adds a new destination field
  - while pressing the remove button removes the field
  - In the HTML, each label has a "for" that matches the "id" of its related input
  - I'm not sure why could that be useful yet, but I saw that in the MDN docs
  - feel free te edit the HTML btw

- Map:
  - Ideally, it should be interactive with the user input
  - for example, the user could select a location on the map
  - and that will automatically be saved into the destination field
  - Or maybe grab the adress, the website (if any), or the open hours of the chosen location
  - For this project, we probably don't need to do all of that.
  - We could probably get away with only showing the map, but at least one of these features would be cool

- Action buttons
  - Save should add the trip to the home page. Need to know what a trip card in the home page would look like.
  - only the data displayed in the home page cards should be used. The rest of the data should be saved in our data file.
  - Cancel just cancels obviously xD
  - Both save and cancel should clear all the inputs
  - Both should redirect to home page
  - Honestly haven't looked into uploading images much
*/



console.log("connected");
