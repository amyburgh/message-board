const modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('messageBtn');

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
  console.log('btn.onclick');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

console.log('message.js loaded');
