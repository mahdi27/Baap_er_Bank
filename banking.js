// Handle deposite Button
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);
    const depositeTotal = document.getElementById('deposite-total');
    const currentDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(currentDepositeAmount) + parseFloat(depositeAmount);
    depositeTotal.innerText = newDepositeTotal;
    depositeInput.value = '';
    //Update Balance
    const balanceText = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceText.innerText);
    const updateBalance = balanceAmount + parseFloat(depositeAmount);
    balanceText.innerText = updateBalance;
    console.log(updateBalance);
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    console.log(withdrawAmount);
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentwithdrawAmount = withdrawTotal.innerText;
    const newwithdrawTotal = parseFloat(currentwithdrawAmount) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newwithdrawTotal;
    withdrawInput.value = '';
    //Update Balance
    const balanceText = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceText.innerText);
    const updateBalance = balanceAmount - parseFloat(withdrawAmount);
    balanceText.innerText = updateBalance;
    console.log(updateBalance);
})