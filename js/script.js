function displayResult() {
  document.getElementById("myPhone").innerHTML = "Abhilash Chutia (+91) 88766 75042";
  document.getElementById("myPhone").style.fontSize = "25px"; 
  document.getElementById("myPhone").style.color = "red";
  document.getElementById("myPhone").style.backgroundColor = "yellow";  
}


function myFunction() {
  var x = document.getElementsByClassName("advertise");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "images/gif/pic_bulboff.gif"
  } else {
    pic = "images/gif/pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}