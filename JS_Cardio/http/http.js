const text = document.getElementById("text");

//https://maps.googleapis.com/maps/api/directions/json?destination=40.695574,-73.987947&origin=40.820133,-74.221332&key=AIzaSyBh4yugP-Ux5iHxw4vfK7X6a2a7L4l4lCk&mode=driving
var request;
function request() {
  var request = new XMLHttpRequest();

  if (!request) {
    alert("Request failed");
    return false;
  }

  request.onreadystagstatechange = alertContents;
  request.open(
    "GET",
    "maps.googleapis.com/maps/api/directions/json?destination=40.695574,-73.987947&origin=40.820133,-74.221332&key=AIzaSyBh4yugP-Ux5iHxw4vfK7X6a2a7L4l4lCk&mode=driving",
    true
  );
  request.send();
}

function alertContents() {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      alert(request.responseText);
      var response = JSON.parse(request.responseText);
    } else {
      alert("There was a problem with the request.");
    }
  }
}
console.log("Loaded");
