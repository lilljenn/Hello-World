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
  this.options[this.selectedIndex].value && (window.location=this.options[this.selectedIndex].value);
}
