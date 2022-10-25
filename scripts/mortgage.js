"use strict";
// Mortgage Calculator 

window.onload = init;
function init() {
    
 // Calculate Button 
 const Calculatetbtn = document.getElementById("Calculatetbtn");
 Calculatetbtn.onclick = onCalculatebtnClicked;
}
function onCalculatebtnClicked(){
    //Find HTML elements 
 
 const principalinputField = document.getElementById("principalinputField");
const interestRateInputField= document.getElementById("interestRateInputField");
const loanLengthInputField = document.getElementById("LoanLengthInputField");


let interestInput= (interestRateInputField/100)/12;
 let loanLenthInput = loanLengthInputField * 12;
 let principalInput = (principalinputField * interestInput)/(1-Math.pow(1+interestRateInputField,-loanLenthInput));
let payment = principalInput;
 const  monthlyInputField= document.getElementById("MonthlyInputField");
 monthlyInputField.value = payment;

}
