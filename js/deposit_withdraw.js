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