function applicationSubmit(){
  var name=document.getElementById("name").value;
  if (name!=""){
    document.getElementById("output").innerHTML="Welcome, "+name;
  }
  else if (name==""){
    document.getElementById("output").innerHTML="Please enter a name.";
  }
}
function map(){
  var cantata={
    center:new google.maps.LatLng(29.403190, -98.616730)
    zoom:5;
      }
var cantataMap=new google.maps.Map(document.getElementById("googleMap"), cantata);
}
