
//  get and update  for extra price
function extraPrice(inputId, inputPrice) {
    inputFiled = document.getElementById(inputId);
    inputFiled.innerText = inputPrice;
    updatePrice();  /// calling  update price for set new price value 
}


// handle 8gb memory button
document.getElementById('8gb-memory').addEventListener('click', function () {

    extraPrice('memory-cost', 0);  /// calling extraPrice function
});

// handle 16 gb memory button
document.getElementById('16gb-memory').addEventListener('click', function () {


    extraPrice('memory-cost', 180); /// calling extraPrice function
});

// handle 256gb ssd button
document.getElementById('256gb-ssd').addEventListener('click', function () {
    extraPrice('storage-cost', 0);  /// calling extraPrice function

});

// handle 512gb ssd button
document.getElementById('512gb-ssd').addEventListener('click', function () {

    extraPrice('storage-cost', 100);   /// calling extraPrice function
})

// handle 1tb ssd button
document.getElementById('1tb-ssd').addEventListener('click', function () {
    extraPrice('storage-cost', 180);  /// calling extraPrice function

});

// handle deliver-free button
document.getElementById('delivery-free').addEventListener('click', function () {

    extraPrice('delivery-cost', 0); /// calling extraPrice function
});

// handle deliver-charge button
document.getElementById('delivery-charge').addEventListener('click', function () {

    extraPrice('delivery-cost', 20); /// calling extraPrice function
});


// handle promo button
document.getElementById('promo-button').addEventListener('click', function () {


    promoInput = document.getElementById('promo-input');
    promoText = promoInput.value;

    if (promoText == 'stevekaku') {
        const totalAmount = getInputValue('total-cost');
        const afterDiscountTotalAmount = totalAmount - ((totalAmount * 20) / 100);
        paymentPrice(afterDiscountTotalAmount);

    }
    else {
        const totalAmount = getInputValue('total-cost');
        paymentPrice(totalAmount);
    }
    // clear input filed
    promoInput.value = '';

});

/// get the value from table filed
function getInputValue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.innerText;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}



updatePrice();

// update price function

function updatePrice() {

    // get amount
    const baseCost = getInputValue('base-cost');
    const memoryCost = getInputValue('memory-cost');
    const storageCost = getInputValue('storage-cost');
    const deliveryCost = getInputValue('delivery-cost');

    const total = document.getElementById('total-cost');

    // upadate total Amount
    const totalAmount = memoryCost + storageCost + deliveryCost + baseCost;
    total.innerText = totalAmount;

    paymentPrice(totalAmount);



}

// total pay amount  function

function paymentPrice(amount) {
    const totalPayment = document.getElementById('total-payment');
    totalPayment.innerText = amount;
}