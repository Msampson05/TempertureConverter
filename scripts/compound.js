"use strict";
// Compound Interest Calculator 
window.onload() = init;
function init() {
// Find HTML elements 
    const DepositInputField = document.getElementById("DepositInputField");
    const interestRate = document.getElementById("interestRate");
    const YearsInputField = document.getElementById("YearsInputField");
// Calculate Button
    const Calculatetbtn = document.getElementById("Calculatetbtn");
    Calculatetbtn.onclick = onCalculatebtnClicked;

function onCalculatebtnClicked(){
    let depositInput = DepositInputField;
    let interestInput = interestRate/100;
    let numberOfTime = 12;
    let YearsInput = YearsInputField;
    let compoundInterest = depositInput * (Math.pow((1 + (interestInput/numberOfTime)), (numberOfTime * YearsInput)));
     const CompoundInterestField = document.getElementById("CompoundInterestField");
     CompoundInterestField = compoundInterest
}
}
