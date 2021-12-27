// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

//adding event listener for every click
for(const glyph of hearts) {
glyph.addEventListener("click", likeCallBack)
}

function likeCallback(event){
  const heart = event.target
  //invoke () to simulate making a server request
  mimicServerCall()
  .then(() => {
    //response what happens when you click
    if(heart.innerText === EMPTY_HEART){
    //adding class to make heart appear red
    heart.className = "activated-heart"
    heart.innerText = FULL_HEART;
    } else{ // when user clicks on full heart , change the heart back to empty
            //and remove class .activated-heart
      heart.innerText = EMPTY_HEART;
      heart.className = ''
    }
  }) //when server returns failure we respond with .catch()
  .catch((error) => {
    //display the error modal
    const modal = document.getElementById('modal')
    //by removing the class name
    modal.className = ''
    //server error message
    modal.innerText = error 
    setTimeout(function(){
      modal.className = "hidden"
    }, 3000)
  })

}


  //------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
