

const otp = document.getElementById('input')
const button = document.getElementById('button')

function otpGenerator() {
   const otpValue = Math.floor(Math.random()*1000000+1)
   otp.value = otpValue
   
}
