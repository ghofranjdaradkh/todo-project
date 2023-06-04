let names=  prompt("Please enter your name");
let gender=prompt("Please enter your gender", "male or female");

let age =prompt("Please enter your age" );
//console.log(person)
//window.confirm("hello world");
var count=0;
while (age<=0 || age>=150){
  alert("please enter correct age");
age =prompt("Please enter your age" );}

if (window.confirm("Do you want skip the Welcoming massage?"))
{ok}
else if (gender ==="male"){
alert("Welcome in todo list "+"Mr."+" "+names);}
else if(gender==="female")
{alert("Welcome in todo list "+"Ms."+ " " +names);}
else {
  alert("Welcome in todo list "+names);}

