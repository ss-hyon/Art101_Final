/**
 * Author:    Selena Hyon
 * Created:   Spring 2021
 *
 * Public Domain
 **/
function searchFound(){
  alert("YOU FOUND IT!" + "Click to find your nearest California Certified Farmer's market.");
  window.open("https://ecologycenter.org/fmfinder/");
}

 function marketInfo() {
  var x = document.getElementById("mkHidden");
  if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }
var button = document.getElementById("mkAudio");
var audio = document.getElementById("mkPlayer");
button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
    button.style.color = "red";
  } else {
    audio.pause();
    button.innerHTML = "Play";
    button.style.color = "transparent";
  }
});
