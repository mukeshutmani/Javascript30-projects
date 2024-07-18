

let posts = [
     
]


function uploadPost(){

document.querySelector('.postStore').style.visibility='visible'

 const imageInput = document.getElementById('image')
 const textInput = document.getElementById('text')
 const file = imageInput.files[0]



  const newPost = {
     id: posts.length + 1,
     text: textInput.value,
     image_url: URL.createObjectURL(file),
     likes: 0,
     Comments: [],
  }

  posts.push(newPost)
  displayPosts()
   
  imageInput.value =''
  textInput.value=''
}


function displayPosts() {
   const postsContainer = document.getElementById('postsContainer')
   postsContainer.innerHTML=''
   
   
   
    
   posts.forEach((post)=> {
        const div = document.createElement('div')
        div.innerHTML= `

        <div class="profileContainer">
            <img id="profile" src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="50px" height="50px" style="display:flex;" >
            <h3 class="profileName">Rutika Agarwal </h3>
        </div> 
        
        <p> ${post.text}</p>
        <img id="img" src="${post.image_url}" alt="post image" > 

          
         <button id="editButton" onclick= "editPost(${post.id})" >Edit</button>
         <button id="editButton" onclick= "deletePost(${post.id})" > Delete </button>
         <button id="like-button" onclick= "likePost(${post.id})">👍</button>
         <span id="likeCount${post.id}" style="font-size:25px" >${post.likes}</span>

         <div>
         <textarea id="commentText${post.id}" placeholder="write a comment"> </textarea>
         <button onclick="addComment(${post.id})">Comment</button>
         </div>

         <div id="commentsContainer${post.id}" class="comments">
             ${post.Comments.map(comment => `<p> ${comment.text}<p/>`).join('')}
         </div>
         
        `

        postsContainer.appendChild(div)
   })
}


function editPost(postid){
      const newText = prompt('Enter your text')
      const post = posts.find( post =>post.id === postid)

      if(post) {
        post.text = newText
        displayPosts()
      }
}


function deletePost(postid){
   posts = posts.filter( post => post.id !== postid)
   displayPosts()
}


function likePost(postid){
     const post = posts.find(post => post.id === postid)
     if(post) {
        post.likes += 1
        document.getElementById(`likeCount${post.id}`).innerText = post.likes
     }
}
 
 function  addComment(postid) {
     const commentText = document.getElementById(`commentText${postid}`).value
     const post = posts.find(post => post.id === postid)
      if(post){
         post.Comments.push({text: commentText})
         displayPosts()
      }
 }



displayPosts()


