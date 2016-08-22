var Place = function(location, landmark, timeOfYear, notes){
  this.loc = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
Place.prototype.displayDetails = function(){
  $("#properties").hide().append("<li class='place'><p class ='location'>Location: "+ this.loc +"</p><div class='hiddenPlace'><p>Landmark: " +this.landmark + " </p><p>Best time of year to visit: " + this.timeOfYear + "</p><p>Notes: "+ this.notes +"</p> </div></li>").slideDown();
}
var formSubmitted = false;

$(document).ready(function() {
  $("form#addLocation").submit(function(event){
    event.preventDefault();
    formSubmitted = true;
    var location = $("#location").val();
    var landmark = $("#landmark").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var myPlace = new Place(location, landmark, timeOfYear, notes);
    myPlace.displayDetails();
    $(".place").click(function(){
      $("#properties").find("div").slideUp();
      if (!($(this).find("div").is(':visible'))){
        $(this).find("div").slideDown();
      }
    });
  });
  $(".place").click(function(){
    if(!(formSubmitted)){
      $("#properties").find("div").slideUp();
      if (!($(this).find("div").is(':visible'))){
        $(this).find("div").slideDown();
      }
    }
  });
});
