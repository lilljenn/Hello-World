function applicationSubmit(){
  var name=document.getElementById("name").value;
  if (name!=""){
    document.getElementById("output").innerHTML="Welcome, "+name;
  }
  else if (name==""){
    document.getElementById("output").innerHTML="Please enter a name.";
  }
}
var count = 0;
var sunday=document.getElementById("sunday");
var monday=document.getElementById("monday");
var tuesday=document.getElementById("tuesday");
var wednesday=document.getElementById("wednesday");
var thursday=document.getElementById("thursday");
var friday=document.getElementById("friday");
var saturday=document.getElementById("saturday");
sunday.onclick=function(){
  count++;
  if (count %2 == 1){
    sunday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    sunday.style.backgroundColor="#ffd966";
  }
}
monday.onclick=function(){
  count++;
  if (count %2 == 1){
    monday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    monday.style.backgroundColor="#ffd966";
  }
}
tuesday.onclick=function(){
  count++;
  if (count %2 == 1){
    tuesday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    tuesday.style.backgroundColor="#ffd966";
  }
}
wednesday.onclick=function(){
  count++;
  if (count %2 == 1){
    wednesday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    wednesday.style.backgroundColor="#ffd966";
  }
}
thursday.onclick=function(){
  count++;
  if (count %2 == 1){
    thursday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    thursday.style.backgroundColor="#ffd966";
  }
}
friday.onclick=function(){
  count++;
  if (count %2 == 1){
    friday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    friday.style.backgroundColor="#ffd966";
  }
}
saturday.onclick=function(){
  count++;
  if (count %2 == 1){
    saturday.style.backgroundColor="#ffecb3";
  }
  if (count%2 == 0){
    saturday.style.backgroundColor="#ffd966";
  }
}
