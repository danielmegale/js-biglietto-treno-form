console.log('JS OK')
KmPrice = 0.21 
//Prendiamo un elemnto dal DOM
let  element =document.getElementById('ticket');
let couponTicket =document.getElementById('coupon-ticket');
const Age =document.getElementById('user-age')
const Km =document.getElementById('user-km')
const Button =document.getElementById('button')
const Name =document.getElementById('user')
const userTicket=document.getElementById('user-ticket')

// al click del button
Button.addEventListener('click', function(){
    //User Info
    const user = Name.value.trim();
    console.log(user)
    
    const userAge = Age.value.trim();
    console.log(userAge);
    // + ' ' + 'Anni', typeof userAge
    const userKm =parseInt( Km.value.trim());
    console.log(userKm +'Km', typeof userKm);
    userTicket.innerText ='Nome passeggero: ' + user;

    //Validatore
    let coupon= 1;
    let newPrice;
    if (isNaN(userKm)){
        alert('Valore non valido')
    }else if ((userAge<=0) || (userKm <=0)){
        alert('Valore negativo non valido')
    }else{
        const ticketPrice = (userKm * KmPrice).toFixed(2);
        console.log(ticketPrice);
        element.innerText ='Prezzo biglietto: '+ ticketPrice +'€';
        couponTicket.innerText='Offerta: ' + 'Biglietto standard';
        
        if (userAge ==='minorenne'){
             coupon = 0.80;
             console.log(coupon);
             newPrice = ticketPrice * coupon;
            console.log(newPrice);
            element.innerText ='Prezzo Biglietto' + ' ' +  (newPrice).toFixed(2) + '€';
            couponTicket.innerText='Offerta: ' + 'Biglietto Ridotto';
        }else if (userAge === 'over65'){
            coupon = 0.60;
            console.log(coupon);
            newPrice = ticketPrice * coupon;
             console.log(newPrice);
            element.innerText ='Prezzo Biglietto' + ' ' +  (newPrice).toFixed(2) + '€';
            couponTicket.innerText='Offerta: ' + 'Biglietto Senior';
        }
    }
});
