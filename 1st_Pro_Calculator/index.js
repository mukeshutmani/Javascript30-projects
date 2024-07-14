
function clearDisplay(){
     document.getElementById('input').value=""
     document.getElementById('input2').value=""
    //  console.log('clear Display');
}

function appendOperation(value){
  document.getElementById('input').value +=`${value}`;
}

function result(){
   const display =  document.getElementById('input')
   
   const resultDisplay = document.getElementById('input2')
   try {
     
    let result = display.value
    result = result.replace(/(\d+(\.\d+)?)%/g, '($1/100)*');
    console.log(result);
   
    resultDisplay.value = eval(result)
    
   } catch (error) {
     resultDisplay.value = 'error'
   }
  

}