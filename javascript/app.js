let names=  prompt("Please Enter Your Name");
let gender=prompt("Please Enter Your Gender", "male or female");
let age =prompt("Please Enter Your Age" );
UserAge(age);
question1=prompt("Is it the first time you visit the todo-list ? ","Yes Or No");
 ans1=AnsQuestion(question1)
var  question2=prompt("Are you have tasks you mustn't forget it?","Yes Or No ");
ans2=AnsQuestion(question2)
var question3=prompt("Are you exited to be in ?"," Yes Or No");
ans3=AnsQuestion(question3) 
WelcomeMassage();

let answers=[ans1,ans2,ans3]
PrintAnswers(answers)





  function UserGender(gender){
    if (gender ==="male"){
     alert("Welcome in todo list"+"Mr."+" "+names);}
     else if(gender==="female")
     {alert("Welcome in todo list "+"Ms."+ " " +names);}
     else {
       alert("welcome in todo list "+names);}
 return gender}


 function UserAge(age){
  while (age<=0 || age>150){
   alert("Please Enter Correct Age");
   age =prompt("Please Enter Your Age" );}
   return age}


   function WelcomeMassage(){
    if (window.confirm("Do you want skip the Welcoming Massage?"))
   true
   else {
     UserGender(gender)
   }
}

   function AnsQuestion(question) {
    if (question=="Yes"  ){
     ans= "Yes"}
      else if (question=="No"  ){
      ans= "No"}
      else{ question==" "
      ans = "invalid"}

    return ans

  }
 
  function PrintAnswers( arr){
for (let i = 0; i < 3; i++) {
  console.log("answer:"+arr[i])}    
  }
   