
function toggleNav() {
    var x = document.getElementById("my-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function hideNav(){
  var x = document.getElementById("my-links");
  x.style.display = "none";  
}

document.addEventListener("DOMContentLoaded", function(){
  let myButtons = document.getElementsByClassName("nav-button");
  for(button of myButtons){
    button.addEventListener("click", hideNav)
  }

});
