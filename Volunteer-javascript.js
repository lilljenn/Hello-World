function applicationSubmit(){
  var name=document.getElementById("name").value;
  var output=document.getElementById("output");
  var reasons=document.getElementById("reasons").value;
  if (name!=""){
    if (count!=0){
      if (reasons!=""){
        output.innerHTML="Welcome, "+name+"<br/>"+"The days that you are avaliable are "+value+"<br/>"+"Your reasons for volunteering include "+reasons;
      }
      else{
        output.innerHTML="Please write about your reasons for volunteering.";
      }
    }
    else{
      output.innerHTML="Please select at least one day of availability.";
    }
  }
  else if (name==""){
    output.innerHTML="Please enter a name.";
  }
  event.preventDefault();
}
var count = 0;
var sunday=document.getElementById("sunday");
var monday=document.getElementById("monday");
var tuesday=document.getElementById("tuesday");
var wednesday=document.getElementById("wednesday");
var thursday=document.getElementById("thursday");
var friday=document.getElementById("friday");
var saturday=document.getElementById("saturday");
var value="";
sunday.onclick=function(){
  count++;
  if (count %2 == 1){
    sunday.style.backgroundColor="#ffecb3";
      if(value.includes("Sunday ")==true){
        value+="";
      }
      else{
        value+="Sunday ";
      }
    }
  if (count%2 == 0){
    sunday.style.backgroundColor="#ffd966";
    count=0;
  }
}
monday.onclick=function(){
  count++;
  if (count %2 == 1){
    monday.style.backgroundColor="#ffecb3";
    if (value.includes("Monday ")==true){
      value+="";
    }
    else{
      value+="Monday ";
    }
  }
  if (count%2 == 0){
    monday.style.backgroundColor="#ffd966";
    count=0;
  }
}
tuesday.onclick=function(){
  count++;
  if (count %2 == 1){
    tuesday.style.backgroundColor="#ffecb3";
    if (value.includes("Tuesday ")==true){
      value+="";
    }
    else{
      value+="Tuesday ";
    }
  }
  if (count%2 == 0){
    tuesday.style.backgroundColor="#ffd966";
    count=0;
  }
}
wednesday.onclick=function(){
  count++;
  if (count %2 == 1){
    wednesday.style.backgroundColor="#ffecb3";
    if (value.includes("Wednesday ")==true){
      value+="";
    }
    else{
      value+="Wednesday ";
    }
  }
  if (count%2 == 0){
    wednesday.style.backgroundColor="#ffd966";
    count=0;
  }
}
thursday.onclick=function(){
  count++;
  if (count %2 == 1){
    thursday.style.backgroundColor="#ffecb3";
    if (value.includes("Thursday ")==true){
      value+="";
    }
    else{
      value+="Thursday ";
    }
  }
  if (count%2 == 0){
    thursday.style.backgroundColor="#ffd966";
    count=0;
  }
}
friday.onclick=function(){
  count++;
  if (count %2 == 1){
    friday.style.backgroundColor="#ffecb3";
    if (value.includes("Friday ")==true){
      value+="";
    }
    else{
      value+="Friday ";
    }
  }
  if (count%2 == 0){
    friday.style.backgroundColor="#ffd966";
    count=0;
  }
}
saturday.onclick=function(){
  count++;
  if (count %2 == 1){
    saturday.style.backgroundColor="#ffecb3";
    if (value.includes("Saturday ")==true){
      value+="";
    }
    else{
      value+="Saturday ";
    }
  }
  if (count%2 == 0){
    saturday.style.backgroundColor="#ffd966";
    count=0;
  }
}
