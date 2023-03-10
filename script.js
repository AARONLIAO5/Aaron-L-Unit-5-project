let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result5");
let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let button = document.querySelector("button");

  

button.onclick = function() {
     let answer1=document.querySelector(".star-input").value;
    let answer2=document.querySelector(".userInput").value;
    let message = document.querySelector(".message");  
    
    
    if (answer1 <=25  && answer2 === "yes") { message.innerHTML= "You died!";} 
 else
     if (answer1 <= 25 && answer2 ==="no") { message.innerHTML = " You Died!";}
else
    if (answer1 >=26 && answer2==="yes" ) { message.innerHTML = " You have unforunatly died";}
else
    if (answer1 >=26 && answer2 ==="no") { message.innerHTML = " You Survive";} 
    if (answer2 === "maybe") { message.innerHTML= "Hesitation is not good";}
};
  
