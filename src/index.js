let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let qr = document.querySelector("#qr");
let btn  = document.querySelector("#btn");
let input = document.querySelector("#input");

function qrCode () {
   if(input.value){
    qr.src = URL+input.value;
    input.value ="";
   }else{
    alert("Please enter some data for the QR code.");
    
   }
}



