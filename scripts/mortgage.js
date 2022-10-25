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
const  interestRateInputField= document.getElementById("interestRateInputField");
const loanLengthInputField = document.getElementById("LoanLengthInputField");

    let principalInput = Number(principalInput.value);
    let interestInput = Number(interestInput.value);
    let loanLenthInput = Number(loanLenthInput.value);
    let monthlyInput = (principalInput)*(interestInput/ 1 -(1+interestInput)-loanLenthInput);
    const  MonthlyInput= document.getElementById("MonthlyInput");
    MonthlyInput.value = monthlyInput;

}
