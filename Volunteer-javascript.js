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
  window.open(document.getElementById("linkMenu").options[document.getElementById("linkMenu").selectedIndex].value)
}
