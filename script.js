console.log('JS OK')
KmPrice = 0.21 
//Prendiamo un elemnto dal DOM
const element =document.getElementById('ticket');
const couponTicket =document.getElementById('coupon-ticket');
const user =document.getElementById('user-age')
const Km =document.getElementById('user-km')

//User Info
const userAge =parseInt(prompt('Inserisci la tua età', 45));
console.log(userAge + ' ' + 'Anni', typeof userAge);


const userKm =parseInt(prompt('Inerisci i kilometri che vuoi percorrere',100));
console.log(userKm+'Km', typeof userKm);

//Validatore
let coupon= 1;
let newPrice;
if (isNaN(userAge) || isNaN(userKm)){
    alert('Valore non valido')
}else if ((userAge < 0) || (userKm < 0)){
    alert('Valore negativo non valido')
}else{
    const ticketPrice = (userKm * KmPrice).toFixed(2);
    console.log(ticketPrice);
    element.innerText +=' '+ ticketPrice +'€';
    user.innerText +=' ' + userAge + 'Anni';
    Km.innerText +=' '+ userKm + 'Km';

    if (userAge < 18 ){
        coupon = 0.80;
        console.log(coupon);
        newPrice = ticketPrice * coupon;
        console.log(newPrice);
        couponTicket.innerText +='Biglietto scontato' + ' ' +  (newPrice).toFixed(2) + '€';
    }else if (userAge >=65){
        coupon = 0.60;
        console.log(coupon);
        newPrice = ticketPrice * coupon;
        console.log(newPrice);
        couponTicket.innerText +='Biglietto scontato' + ' ' +  (newPrice).toFixed(2) + '€';
    }
}

