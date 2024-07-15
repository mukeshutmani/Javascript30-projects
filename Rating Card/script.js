// document.addEventListener('DOMContentLoaded',()=>{

// })

    const stars = document.querySelectorAll('.star')
    const ratingValue = document.getElementById('rating-value')
    const container = document.querySelector('.container')
    
    stars.forEach((star)=> {
         star.addEventListener('click',()=>{
             const value = star.getAttribute('data-value')
             ratingValue.textContent = value
             updateStar(value)

         } )
    })


    function updateStar(value){
          stars.forEach((star)=>{
               if(star.getAttribute('data-value') <= value){
                  star.classList.add('selected')
               } else {
                 star.classList.remove('selected')
               }
          })


    let paragraph = document.getElementById("rating-text");
    if(!paragraph) {
        paragraph = document.createElement("p")
        paragraph.id = "rating-text";
        container.appendChild(paragraph)
    }
   
   
    if(value == 1){
            paragraph.textContent = "Terriable"
    } else if (value == 2) {
      paragraph.textContent = "Bad"
    }  else if (value == 3){
          paragraph.textContent = "Satisfied"

    }  else if (value == 4 ){
              paragraph.textContent = "Good"
    }  else {
        paragraph.textContent = "Excellent "
    }

}










