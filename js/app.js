function getPin(){
    const randomNumber =  Math.round(Math.random()*10000);
    const pinString = randomNumber + '';

    if( pinString.length == 4 ){
        return randomNumber;
    }else{
        return getPin();
    }
}
function generatePin(){
  
    const pin = getPin()
    const displayPin = document.getElementById('display-pin');
    displayPin.value =  getPin();
}

// Using work in Calculator

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    if( isNaN(number) ){
        alert("Please give a Valid input");
    }else{
   
    const calcInput = document.getElementById('typed-numbers');
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;

    }
//    const previusNumber =  typedNumber.value  = event.target.innerText;
//    const currentNumber = previusNumber + 


})