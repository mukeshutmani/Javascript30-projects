

let totext   = document.querySelector('.to-text')
let fromtext = document.querySelector('.from-text')   


const fromlang = document.getElementById('from-lang')
const tolang = document.getElementById('to-lang')
const select = document.querySelectorAll('select')

  select.forEach((tag, id) => {
     for( let country_code in countries) { 

        let selected = id == 0 ? country_code == "en" ? "selected" : "" : country_code == "hi" ? "selected" : "";
        console.log(selected);
       
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
        console.log(option);
     }     
        
  })

  fromtext.addEventListener("keyup", () => {
    if (!fromtext.value) {
        totext.value = "";
    }
});





 document.querySelector('button').addEventListener('click', async function(){

    text = fromtext.value.trim()
    translateFrom =  select[0].value
    translateTo = select[1].value

    if(!text) return

    let apiurl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;


    try {
        let response = await fetch(apiurl)
        if(!response) throw new Error('Error: your network error')
        let data = await response.json()
        
        let translateText = data.responseData.translatedText
        totext.value = translateText
       
    } catch (error) {
        console.error('Error:', error);
        totext.setAttribute("placeholder", "Translation failed");
    }
     
     
 })


