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
window.open(document.getElementById("linkMenu").value);
}
function footer(){
window.open(document.getElementById("footerMenu").value);
}
