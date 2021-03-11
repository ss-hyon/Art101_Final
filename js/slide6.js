/**
 * Author:    Selena Hyon
 * Created:   Spring 2021
 *
 * Public Domain
 **/
 //text box info
$("#mkHidden").hide();
function searchFound(){
   alert("YOU FOUND IT!");
  window.open("https://ecologycenter.org/fmfinder/");
}
 function marketInfo() {
  var x = document.getElementById("mkHidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var button = document.getElementById("mkAudio");
var audio = document.getElementById("mkPlayer");
button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
