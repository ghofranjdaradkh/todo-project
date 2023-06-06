let Names=  prompt("Please Enter Your Name");
let Gender=prompt("Please Enter Your Gender", "male or female");
let Age =prompt("Please Enter Your Age" );
UserAge(Age);
WelcomeMassage();
Question1=prompt("Is it the first time you visit the todo-list ? ","Yes Or No");
 Ans1=AnsQuestion(Question1)
var  Question2=prompt("Are you have tasks you mustn't forget it?","Yes Or No ");
Ans2=AnsQuestion(Question2)
var Question3=prompt("Are you exited to be in ?"," Yes Or No");
Ans3=AnsQuestion(Question3) 


let answers=[Ans1,Ans2,Ans3]
PrintAnswers(answers)





  function UserGender(Gender){
    if (Gender ==="male"){
     alert("Welcome in todo list"+"Mr."+" "+Names);}
     else if(Gender==="female")
     {alert("Welcome in todo list "+"Ms."+ " " +Names);}
     else {
       alert("welcome in todo list "+Names);}
 return Gender}


 function UserAge(Age){
  while (Age<=0 || Age>150){
   alert("Please Enter Correct Age");
   Age =prompt("Please Enter Your Age" );}
   return Age}


   function WelcomeMassage(){
    if (window.confirm("Do you want skip the Welcoming Massage?"))
   true
   else {
     UserGender(Gender)
   }
}

   function AnsQuestion(Question) {
    if (Question=="Yes"  ){
     Ans= "Yes"}
      else if (Question=="No"  ){
      Ans= "No"}
      else{ Question==" "
      Ans = "invalid"}

    return Ans

  }
 
  function PrintAnswers( arr){
for (let i = 0; i < 3; i++) {
  console.log("answer:"+arr[i])}    
  }
   