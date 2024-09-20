// global variable....
const selectSeatEl = document.getElementById("select-seat");
const totalPrice = document.getElementById("total-price");
const seatCount = document.getElementById("seat-count");
const seatLeft = document.getElementById("seat-left");
const inputCoupon = document.getElementById("input-coupon");
const couponBtn = document.getElementById('coupon-btn');
const discountPrice = document.getElementById('discount-price')
const grandPrice = document.getElementById('grand-price');
const phoneNumber = document.getElementById('phone-input');
const nextBtn = document.getElementById('next-btn');
// global variable....


let seatArray = [];
const seatPrice = 550;
let totalAmount = 0;

function handleSelectSeat(event) {
    const value = event.innerText;

    if(seatArray.includes(value)){
        alert('no')
        return;
    }
    else if(seatArray.length < 4){
        event.classList.add("text-black");
        
        seatArray.push(event.innerText);
        event.classList.add("bg-green-600");
        totalAmount += seatPrice;
        seatCount.innerText = seatArray.length;

        const lastValue = document.getElementById("seat-left");
        const updateValue = parseFloat(lastValue.innerText) - 1;
        lastValue.innerText = updateValue;

        totalPrice.innerText = totalAmount.toFixed(2);
        grandPrice.innerText = totalAmount.toFixed(2)
        document.getElementById("no-seat-book").classList.add("hidden");
        const tr = document.createElement("tr");
        tr.className = "bg-green-400 text-black";
        tr.innerHTML = `
                <td>${event.innerText}</td>
                <td>Business</td>
                <td>${seatPrice}</td>
                `;
        document.getElementById("select-seat").appendChild(tr);

        if (seatArray.length > 3) {
            inputCoupon.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        } 
    }
    else{
        alert ('Maximum seat book 4')
        return;
    }
}

document.getElementById('coupon-btn').addEventListener('click',function(){
    const inputValue = inputCoupon.value;
    // discount section...
    if(!inputValue === 'NEW15' || !inputValue === 'Couple 20'){
        alert('input valid coupon')
        return;
    }
    else if(inputValue ==='NEW15'){
        const discount = totalAmount * 0.15
        discountPrice.innerText = discount.toFixed(2) ;

        const newGrandPrice = totalAmount - discount ;
        grandPrice.innerText = newGrandPrice.toFixed(2);
        document.getElementById('coupon-part').classList.add('hidden')
        
    }
    else if(inputValue ==='Couple20'){
        const discount = totalAmount * 0.20
        discountPrice.innerText = discount.toFixed(2) ;

        const newGrandPrice = totalAmount - discount ;
        grandPrice.innerText = newGrandPrice.toFixed(2);
        document.getElementById('coupon-part').classList.add('hidden')
        
    }
})

phoneNumber.addEventListener('input', function(event){
    const numberValue = event.target.value;
    if(numberValue.length >= 11){
        nextBtn.removeAttribute('disabled');
    }
})
document.getElementById('close').addEventListener('click',function(){
    window.location.reload()
})