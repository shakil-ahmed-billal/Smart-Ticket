const selectSeatEl = document.getElementById('select-seat');
const totalPrice =document.getElementById('total-price');
const seatCount = document.getElementById('seat-count');
const seatLeft = document.getElementById('seat-left');

let seatArray = [];
const seatPrice = 550 ;
let totalAmount = 0;
function handleSelectSeat(event){
    if(seatArray.length <= 3){
        event.classList.add('bg-green-600')
        event.classList.add('text-black')
    
        seatArray.push(event.innerText);
        totalAmount += seatPrice
        seatCount.innerText = seatArray.length ;
        const lastValue = document.getElementById('seat-left')
        const updatevalue = parseFloat(lastValue.innerText)- 1;
        lastValue.innerText = updatevalue;
        // console.log(nowSeat - seatArray.length);
    
        totalPrice.innerText = totalAmount;
        document.getElementById('no-seat-book').classList.add('hidden')
        const tr = document.createElement('tr')
        tr.className = 'bg-green-400 text-black';
        tr.innerHTML = `
        <td>${event.innerText}</td>
        <td>Business</td>
        <td>${seatPrice}</td>
        `
        document.getElementById('select-seat').appendChild(tr);
    }
    else{
        alert('Plase Provide Valid Info');
        return;
    }

}