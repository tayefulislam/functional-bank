
//common function 


function input(inputId) {

    let depositInput = document.getElementById(inputId);
    let depositAmountText = depositInput.value;

    let depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';

    return depositAmount;


}



// deposit and upadate balance 

document.getElementById('deposit-btn').addEventListener('click', function () {

    // get the input by button click step : 1

    // get deposit input by call ta funtion
    let getDeposit = input('deposit-amount');
    console.log(getDeposit);

    // let depositInput = document.getElementById('deposit-amount');
    // let depositAmountText = depositInput.value;

    // let depositAmount = parseFloat(depositAmountText);


    //get the deposit balance step : 2

    let depositField = document.getElementById('deposit-total');

    let depositFieldText = depositField.innerText;

    let depositFieldAmount = parseFloat(depositFieldText);

    // set the input value(deposit amount) to as new deposite value 

    depositField.innerText = depositFieldAmount + getDeposit;

    //update the balance 

    let mainBalance = document.getElementById('balance-total');
    let mainBalanceText = mainBalance.innerText;

    let mainBalanceAmount = parseFloat(mainBalanceText);

    mainBalance.innerText = mainBalanceAmount + getDeposit;


    //clear the deposite input field
    // depositInput.value = '';

});


// withdraw and update balance 
//get the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    let getWithdraw = input('withdraw-amount');

    // let withdrawInput = document.getElementById('withdraw-amount');
    // let withdrawInputText = withdrawInput.value;

    // let withdrawInputAmount = parseFloat(withdrawInputText);


    // set withdraw main balance 

    let withdrawMainBalance = document.getElementById('withdraw-total');

    let withdrawMainBalanceText = withdrawMainBalance.innerText;

    let withdrawMainAmount = parseFloat(withdrawMainBalanceText);

    withdrawMainBalance.innerText = withdrawMainAmount + getWithdraw;


    // update balance 

    let mainBalance = document.getElementById('balance-total');
    let mainBalanceText = mainBalance.innerText;

    let mainBalanceAmount = parseFloat(mainBalanceText);

    console.log(mainBalanceAmount);

    mainBalance.innerText = mainBalanceAmount - getWithdraw;


    //clear the withdraw input field

    // withdrawInput.value = '';



})


