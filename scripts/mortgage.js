"use strict";
// Mortgage Calculator 

window.onload = init;
function init() {
    
//Find HTML elements 
const principalinputField = document.getElementById("principalinputField");
const  interestRateInputField= document.getElementById("interestRateInputField");
const loanLengthInputField = document.getElementById("oanLengthInputField");


 // Calculate Button 
 const Calculatetbtn = document.getElementById("Calculatetbtn");
 Calculatetbtn.onclick = onCalculatebtnClicked;
}
function onCalculatetbtnClicked(){
    const fahrenheitInputField = document.getElementById("fahrenheitInputField");
    let fahrenheitInput = Number(fahrenheitInputField.value);
    let answer = ((5/9) * (fahrenheitInput - 32));
    const celsiusInputField = document.getElementById("celsiusInputField");
    celsiusInputField.value = answer


}
