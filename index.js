window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
 /*
  for(var i =0; i<10;i++)
  {
    console.log(i); console.log( $(".pad div").html(pads[i]));

  }*/
   
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      //createBubble(index);
       
    });
});

  window.addEventListener("play", function(evt)
{
    if(window.$_currentlyPlaying)
    {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true);

window.addEventListener("keypress" , function()
{
   var x = event.which
   console.log(x)
   console.log(x%10)

   console.log("played index is +1")
   //console.log(sounds.[x%10])
    sounds[x%10].play();
  
});

});
