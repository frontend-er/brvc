// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the modal
const modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
const btn1 = document.getElementById("myBtn1");


// Get the modal
const modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
const btn2 = document.getElementById("myBtn2");

// Get the modal
const modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
const btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close")[1];
const span2 = document.getElementsByClassName("close")[2];
const span3 = document.getElementsByClassName("close")[3];

const body = document.querySelector('body');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
}
btn1.onclick = function() {
   modal1.style.display = "block";
   body.style.overflow = "hidden";
 }
 btn2.onclick = function() {
   modal2.style.display = "block";
   body.style.overflow = "hidden";
 }

 btn3.onclick = function() {
   modal3.style.display = "block";
   body.style.overflow = "hidden";
 }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   body.style.overflow = "auto";
}
span1.onclick = function() {
   modal1.style.display = "none";
    body.style.overflow = "auto";
 }
 span2.onclick = function() {
   modal2.style.display = "none";
    body.style.overflow = "auto";
 }
 span3.onclick = function() {
   modal3.style.display = "none";
    body.style.overflow = "auto";
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   body.style.overflow = "auto";
  }
  if (event.target == modal1) {
   modal1.style.display = "none";
  body.style.overflow = "auto";
 }
 if (event.target == modal2) {
   modal2.style.display = "none";
  body.style.overflow = "auto";
 }

 if (event.target == modal3) {
   modal3.style.display = "none";
  body.style.overflow = "auto";
 }

}