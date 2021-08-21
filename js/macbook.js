// Memories Section Function 
function memorybtn(isIncreasing){
    let memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    let totalPrice = parseInt(document.getElementById('total-price').innerText)
    let finalPrice = parseInt(document.getElementById('final-price').innerText)
    if ((memoryCost == 0) && (isIncreasing == false)){
        document.getElementById('memory-cost').innerText = 180;
        document.getElementById('total-price').innerText = totalPrice + 180;
        document.getElementById('final-price').innerText = totalPrice + 180;
        totalPrice += 180;
        finalPrice = totalPrice
    }
    else if((isIncreasing) && (memoryCost > 0)){
        document.getElementById('memory-cost').innerText = 0;
        document.getElementById('total-price').innerText = totalPrice - 180;
        document.getElementById('final-price').innerText = totalPrice - 180;
        totalPrice -= 180;
    }
}
// Storage Section Funttion
function storageBtn(condition){
    let storageCost = parseInt(document.getElementById('storage-cost').innerText);
    let totalPrice = parseInt(document.getElementById('total-price').innerText)
    let finalPrice = parseInt(document.getElementById('final-price').innerText)
    if ((storageCost == 0) && (condition == 3)){
        document.getElementById('storage-cost').innerText = 180;
        document.getElementById('total-price').innerText = totalPrice + 180;
        document.getElementById('final-price').innerText = totalPrice + 180;
        totalPrice += 180;
        finalPrice = totalPrice
    }
    else if ((storageCost == 100) && (condition == 3)){
        document.getElementById('storage-cost').innerText = 180;
        document.getElementById('total-price').innerText = totalPrice + 80;
        document.getElementById('final-price').innerText = totalPrice + 80;
        totalPrice += 100;
        finalPrice = totalPrice
    }
    else if ((storageCost == 0) && (condition == 2)){
        document.getElementById('storage-cost').innerText = 100;
        document.getElementById('total-price').innerText = totalPrice + 100;
        document.getElementById('final-price').innerText = totalPrice + 100;
        totalPrice += 100;
        finalPrice = totalPrice
    }
    else if ((storageCost >= 180) && (condition == 2)){
        document.getElementById('storage-cost').innerText = 100;
        document.getElementById('total-price').innerText = totalPrice - 80;
        document.getElementById('final-price').innerText = totalPrice - 80;
    }
    else if((condition == 1) && (storageCost > 100)){
        document.getElementById('storage-cost').innerText = 0;
        document.getElementById('total-price').innerText = totalPrice - 180;
        document.getElementById('final-price').innerText = totalPrice - 180;
    }
    else if((condition == 1) && (storageCost > 0)){
        document.getElementById('storage-cost').innerText = 0;
        document.getElementById('total-price').innerText = totalPrice - 100;
        document.getElementById('final-price').innerText = totalPrice - 100;
    }
}

// Delivery Secttion Function
function deliverybtn(isIncreasing){
    let deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    let totalPrice = parseInt(document.getElementById('total-price').innerText);
    let finalPrice = parseInt(document.getElementById('final-price').innerText);

    if ((deliveryCost == 0) && (isIncreasing == false)){
        document.getElementById('delivery-cost').innerText = 20;
        document.getElementById('total-price').innerText = totalPrice + 20;
        document.getElementById('final-price').innerText = totalPrice + 20;
        totalPrice += 20;
        finalPrice = totalPrice
    }
    else if((isIncreasing) && (deliveryCost > 0)){
        document.getElementById('delivery-cost').innerText = 0;
        document.getElementById('total-price').innerText = totalPrice - 20;
        document.getElementById('final-price').innerText = totalPrice - 20;
        totalPrice -= 20;
        finalPrice = totalPrice
    }
}

// Memories Section Buttons 
document.getElementById('memory8gb').addEventListener('click', function(){
    memorybtn(true);
});
document.getElementById('memory16gb').addEventListener('click', function(){
    memorybtn(false);
});

// Storage section buttons 
document.getElementById('storage256gb').addEventListener('click', function(){
    storageBtn(1)
});
document.getElementById('storage512gb').addEventListener('click', function(){
    storageBtn(2)
});
document.getElementById('storage1tb').addEventListener('click', function(){
    storageBtn(3)
});

// Delivery Section Buttons 
document.getElementById('free-delivery').addEventListener('click', function(){
    deliverybtn(true)
});
document.getElementById('paid-delivery').addEventListener('click', function(){
    deliverybtn(false)
});

// Promo Code Section 
document.getElementById('promo-submit').addEventListener('click', function(){
    const promo = document.getElementById('promo-code').value.toLowerCase();
    if (promo == 'stevekaku'){
        finalPrice = parseInt(document.getElementById('final-price').innerText);
        let sum = (finalPrice/100) * 80;
        document.getElementById('final-price').innerText = sum;
        document.getElementById('promo-code').value = ''
    }
})