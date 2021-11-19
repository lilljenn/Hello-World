document.getElementById("column").style.color="#793E91";
function darkMode(){
  document.body.classList.toggle('dark-mode');
}
clicks=0;
function counter(){
 clicks+=1; document.getElementById("output").innerHTML=clicks+" is the total count.";
}
