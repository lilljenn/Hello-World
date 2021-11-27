function applicationSubmit(){
  var name=document.getElementById("name").value;
  if (name!=""){
    document.getElementById("output").innerHTML="Welcome, "+name;
  }
  else if (name==""){
    document.getElementById("output").innerHTML="Please enter a name.";
  }
}
function externalLink(){
  document.getElementById("links").classList.toggle("show");
}

}
function externalLink(){
  document.getElementById("external").classList.toggle("show");
}
