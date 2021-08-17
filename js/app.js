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