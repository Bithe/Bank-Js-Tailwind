//handle deposit button event

document.getElementById('deposit-submit').addEventListener("click", function() {
    //deposited amount
    const depositAmount = document.getElementById('deposit-amount');
    const depositText = depositAmount.value;
    const deposit = parseFloat(depositText);

    console.log(deposit);

    //clear the deposit input field

    depositAmount.value = "";
    //deposit show
    const depositTotalAmount = document.getElementById('total-deposit-amount');
    const previousDepositTotalAmountText = depositTotalAmount.innerText;

    const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountText);
    const newDepositTotalAmount = previousDepositTotalAmount + deposit;
    depositTotalAmount.innerText = newDepositTotalAmount;
    //balance
    const balance = document.getElementById('balance');
    balance.innerText = newDepositTotalAmount;
});

//Withdraw event handler
document.getElementById('withdraw-submit').addEventListener("click", function() {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdraw = withdrawAmount.value;
    console.log(withdraw);
    withdrawAmount.value = "";
    const totalWithdrawAmount = document.getElementById('total-withdraw-amount');

    // show withdraw amount in withdraw
    totalWithdrawAmount.innerText = withdraw;

});