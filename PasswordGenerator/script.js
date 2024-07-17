const input = document.getElementById('input')
const button = document.getElementById('button')

//  range setter
function rangeSeter(value){
    const rangeValue =   document.getElementById('rangeValue')
    rangeValue.textContent = value
}


//  password generator 
function passwordGen(){
  const rangeValue = document.getElementById('range').value
  
  // checkbox 
  const includeChar = document.getElementById('includeChar').checked
  const includeSpecialchar = document.getElementById('includeSpecialchar').checked

  let characters = "0123456789"
  if(includeChar) characters += "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(includeSpecialchar) characters += "~!@#$%^&*()_+{}:><|\/[]="
  
  let password = ""
  for(let i=0; i<rangeValue; i++){
    const randomIndex = Math.floor(Math.random()*characters.length)
    password += characters[randomIndex]
  }

  input.value = password


}



// password privacy

const icon = document.getElementById('icon')

icon.addEventListener('click', function(){
   if(input.type === "password"){
       input.type = 'text'
   } else {
      input.type = 'password'
   }
})

