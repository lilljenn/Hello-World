function applicationSubmit(){
  if (name!=""){
    document.getElementById("output").innerHTML="Welcome, "+name;
  }
  else{
    document.getElementById("output").innerHTML="Please enter a name.";
  }
}
