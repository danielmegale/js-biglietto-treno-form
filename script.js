console.log('JS OK')
KmPrice = 0.21 
//Prendiamo un elemnto dal DOM
let  element =document.getElementById('ticket');
let couponTicket =document.getElementById('coupon-ticket');
const Age =document.getElementById('user-age');
const Km =document.getElementById('user-km');
const Button =document.getElementById('button');
const Name =document.getElementById('user');
const userTicket=document.getElementById('user-ticket');
const reset=document.getElementById('reset')
const cab =document.getElementById('cab')
let code=document.getElementById('code')
const none=document.getElementById('none')
// al click del button
Button.addEventListener('click', function(){
    //User Info
    const user = Name.value.trim();
    console.log(user);
    userTicket.innerText ='Nome passeggero: ' + user;
    
    const userAge = Age.value.trim();
    console.log(userAge);
    
    const userKm =parseInt( Km.value.trim());
    console.log(userKm +'Km', typeof userKm);
    
    
    // Cab Number
    const minCab=1;
    const maxCab=10;
    const randomCab=Math.random();
    const cabRandom =Math.floor(randomCab * (maxCab -minCab))+minCab;
    console.log(cabRandom)
    cab.innerText='Carrozza: ' + cabRandom ;
    
    // Code CP
    const minCode=1000;
    const maxCode=9999;
    const randomCode=Math.random();
    const codeRandom = Math.floor(randomCode * (maxCode -minCode))+minCode;
    console.log(codeRandom)
    code.innerText='Codice CP: ' + codeRandom
    
    
    //Validatore
    let coupon= 1;
    let newPrice;
    if (isNaN(userKm)){
        alert('Valore non valido')
    }else if ((userAge<=0) || (userKm <=0)){
        alert('Valore negativo non valido');
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
    //card
    none.className='d-block'
});
reset.addEventListener('click',  function(){
    Name.value=''
    Age.value=''
    Km.value=''
    none.className='d-none'
    
})


