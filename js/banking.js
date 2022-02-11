
//common function 


function input(inputId) {

    let inputValue = document.getElementById(inputId);

    // let inputAmountText = inputValue.value;
    // let inputAmount = parseFloat(inputAmountText);

    let inputAmount = parseFloat(inputValue.value);
    inputValue.value = '';

    // let inputValue = parseFloat(document.getElementById(inputId).value)
    return inputAmount;


}

// Calculating total amount and update 
function calTotal(valueId, total) {

    // debugger;

    let totalValue = document.getElementById(valueId);
    let totalValueText = totalValue.innerText;
    let totalAmount = parseFloat(totalValueText);
    totalValue.innerText = totalAmount + total
}





// deposit and upadate balance 

document.getElementById('deposit-btn').addEventListener('click', function () {

    // get the input by button click step : 1

    // get deposit input by call ta funtion
    let getDeposit = input('deposit-amount');

    // let depositInput = document.getElementById('deposit-amount');
    // let depositAmountText = depositInput.value;

    // let depositAmount = parseFloat(depositAmountText);


    //get the deposit balance step : 2

    let getTotal = calTotal('deposit-total', getDeposit);
    // let depositField = document.getElementById('deposit-total');

    // let depositFieldText = depositField.innerText;

    // let depositFieldAmount = parseFloat(depositFieldText);

    // // set the input value(deposit amount) to as new deposite value 

    // depositField.innerText = depositFieldAmount + getDeposit;

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


    // let withdrawInput = document.getElementById('withdraw-amount');
    // let withdrawInputText = withdrawInput.value;

    // let withdrawInputAmount = parseFloat(withdrawInputText);
    let getWithdraw = input('withdraw-amount');


    // set withdraw main balance 

    let getTotal = calTotal('withdraw-total', getWithdraw);

    /* let withdrawMainBalance = document.getElementById('withdraw-total');

    let withdrawMainBalanceText = withdrawMainBalance.innerText;

    let withdrawMainAmount = parseFloat(withdrawMainBalanceText);

    withdrawMainBalance.innerText = withdrawMainAmount + getWithdraw; */


    // update balance 

    let mainBalance = document.getElementById('balance-total');
    let mainBalanceText = mainBalance.innerText;

    let mainBalanceAmount = parseFloat(mainBalanceText);

    console.log(mainBalanceAmount);

    mainBalance.innerText = mainBalanceAmount - getWithdraw;


    //clear the withdraw input field

    // withdrawInput.value = '';



})


