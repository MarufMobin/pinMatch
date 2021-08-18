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
    displayPin.value =  getPin(pin);
}

// Using work in Calculator

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if( isNaN(number) ){
        if( number == 'C' ){
            calcInput.value = '';
        }else if( number == '<' ){
            // calcInput.value = indexOf(calcInput).length - 1;
            calcInput.value = calcInput.value.substring( 0, calcInput.value.length - 1);
            // calcInput.value = calcInput.value.length - 1;
        }
        // else{
        //     alert("Please give a Valid input");
        // }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;

    }

});

function verifyPin(){
    const displayPin = document.getElementById('display-pin');
    const typedNumber = document.getElementById('typed-numbers');
   const notifyFaild =  document.getElementById('notify-fail');
   const notifySuccess =  document.getElementById('notify-success');

    if( displayPin.value === typedNumber.value ){

        notifySuccess.style.display = 'block';
        notifyFaild.style.display = 'none';

    }else{
        notifySuccess.style.display = 'none';
        notifyFaild.style.display = 'block';
    }
}