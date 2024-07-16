

function GenerateBarcode(){
   const barcodeInp =  document.getElementById('barcode-input').value

   const format = document.getElementById('barcodeFormat').value
  
   if(barcodeInp.trim() === ""){
    alert(" Please enter a value to Generate Barcode ")
    return
   }
   JsBarcode('#barcode', barcodeInp,{
    format:format,
    linecolor: "#0aa",
    width:1,
    height:40,
    displayValue:true
   })
}