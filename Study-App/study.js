// Dark mode


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


// Title Change

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

