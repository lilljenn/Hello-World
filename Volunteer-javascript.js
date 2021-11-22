function applicationSubmit(){
  var name=document.getElementById("name").value;
  if (name!=""){
    document.getElementById("output").innerHTML="Welcome, "+name;
  }
  else{
    document.getElementById("output").innerHTML="Please enter a name.";
  }
}
