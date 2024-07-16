

const otp = document.getElementById('input')
const button = document.getElementById('button')

function otpGenerator() {
   const otpValue = Math.floor((Math.random()+1)*100000)
   otp.value = otpValue
}
