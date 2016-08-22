var Place = function(location, landmark, timeOfYear, notes){
  this.loc = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

$(document).ready(function() {
$("#tokyo").click(function(){
  var tokyo = new Place("Japan", "Tokyo Skytree", "Spring or Fall", "Tokyo is a wonderful place to visit in the Spring because of the beautiful cherry blossoms!")
  alert(tokyo.notes);
});
$("#dubai").click(function(){
  var dubai = new Place("Dubai", "Burj Kalifa", "Winter", "Dubai is a nice place to visit when it is not 120 degrees out")
  alert(dubai.notes);
});
$("#portland").click(function(){
  var portland = new Place("Portland", "Voodoo Doughnuts", "Summer", "Portland has a lot of bridges")
  alert(portland.notes);
});
});
