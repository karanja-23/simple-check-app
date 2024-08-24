const myCheckbox = document.getElementById("my-checkbox");
const masterCardBtn = document.getElementById("my-mastercard");
const visaBtn = document.getElementById("my-visa");
const paypalBtn = document.getElementById("my-paypal");
const mySubmit = document.getElementById("submit-btn");
const paymentResult = document.getElementById("message")

mySubmit.onclick = function(){
  if (myCheckbox.checked){
    window.alert(`You have subscribed`);
  }
  else{
    window.alert(`You are not subscibed`);
  }
  if(visaBtn.checked){
    paymentResult.textContent = (`You are paying by Visa!`)
  }
  else if(masterCardBtn.checked){
    paymentResult.textContent = (`You are paying by Mastercard!`)
  }
  else if(paypalBtn.checked){
    paymentResult.textContent = (`You are paying by Paypal!`)
  }
  else{
    paymentResult.textContent = (`Please select a mode of payment!`)
  }
}
