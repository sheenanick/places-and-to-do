var Place = function(location, landmark, image, timeOfYear, notes){
  this.loc = location;
  this.landmark = landmark;
  this.image = image;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

var Task = function(description, priority, date){
  this.desc = description;
  this.priority = priority;
  this.date = date;
}

Place.prototype.displayDetails = function(){
  $("#places").hide().append("<li class='place'><p class='loc'>"+ this.loc +"</p><div class='hiddenPlace'><ul><li>Landmark: " +this.landmark + " <br><img src='" + this.image + "' style='width:200px'></li><br><li>Best time of year to visit: " + this.timeOfYear + "</li><br><li>Notes: "+ this.notes +"</li></ul></div></li>").slideDown();
}
Task.prototype.displayTask = function(){
  var color = "";
  if(this.priority == "High")
    color = "#FF0000"
  else if (this.priority == "Normal") {
    color = "#000000"
  }
  else{//low
    color = "#005ce6"
  }

  $("#tasks").append("<li><span class='task' style=color:"+ color+ ">"+this.desc+ "</span><span class='done'><br>Done?</span></li>");
}
Task.prototype.showBox = function(){
  $("#taskBoxDesc").text( this.desc +":");
  $("#taskBoxPriority").text("Priority Level: "+ this.priority);
  if(this.priority =="High"){
    $("#taskBoxPriority").css("color","#FF0000");
  }
  else if (this.priority =="Normal") {
      $("#taskBoxPriority").css("color","#000000");
  }
  else{ //Low
      $("#taskBoxPriority").css("color","#005ce6");
  }
  $("#taskBoxDate").text("Date to complete by: "+ this.date );
}

$(document).ready(function() {
  $("form#addLocation").submit(function(event){
    event.preventDefault();
    var location = $("#location").val();
    var landmark = $("#landmark").val();
    var image = $("#image").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var myPlace = new Place(location, landmark, image, timeOfYear, notes);
    myPlace.displayDetails();
    $(".place").last().click(function(){
      $("#places").find("div").slideUp();
      if (!($(this).find("div").is(':visible'))){
        $(this).find("div").slideDown();
      }
    });
  });
  $(".place").click(function(){
      $("#places").find("div").slideUp();
      if (!($(this).find("div").is(':visible'))){
        $(this).find("div").slideDown();
      }
  });
  $("form#toDo").submit(function(event){
    event.preventDefault();
    var description = $("#taskDescription").val();
    var priority = $("#priority").val();
    var date = $("#date").val();
    var myTask = new Task(description, priority, date);
    myTask.displayTask();
    $(".task").last().click(function(){
      $(".taskBox").show();
      myTask.showBox();
    });
    $(".done").last().click(function(){
      var done = confirm("Are you sure " + myTask.desc + " is complete?");
      if(done){
        $(this).parent().remove();
        $(".taskBox").hide();
      }
    });
  });
});
