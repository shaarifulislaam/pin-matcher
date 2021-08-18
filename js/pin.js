/* document.getElementById('generate-button').addEventListener('click',function(){
   const generatePinInput = document.getElementById('generate-pin');
   const generatePin = parseInt(generatePinInput.value);
  generatePinInput.value = (Math.round(Math.random()*10000));
  
});
 */
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = (pin +'') //pin plus with string = string '1212'
    if(pinString.length==4){
        return pin;
    }else{
        // console.log('got 3 digit and call again',pin);
        return getPin();
    }
}

function generatePin(){
const pin=getPin();
 document.getElementById('display-pin').value = pin ;
}
function verifyPin(){
    // console.log('verify')
    const generatePin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;

    const successMsg = document.getElementById('notify-success');
    const failMsg = document.getElementById('notify-fail');
    if(generatePin==typedNumbers){
       
        successMsg.style.display = 'block';
        failMsg.style.display ='none'
    }
    else{
        successMsg.style.display = 'none';
      failMsg.style.display ='block'
    }
}
document.getElementById('key-pad').addEventListener('click',function(event){

    const number = event.target.innerText;
    const calcInput= document.getElementById('typed-number');

    //jodi number na hoy r jodi number hoy else kaj korbe
   if(isNaN(number)){
     
        if(number == 'C'){
            calcInput.value = '' ;
           
            //for back space
        }else if(number=='<'){
            calcInput.value =calcInput.value.slice(0,-1);
        }
   }
   else{
   
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
   }
});

