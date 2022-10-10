const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

// Menu btn
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

// Toggle the hamburger menu
function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex'); // initially it is hidden, when 'hidden' class is removed, add the 'flex' class. 
  menu.classList.toggle('hidden'); // initially we have 'hidden' => remove this upon click

}

linkForm.addEventListener('submit', formSubmit);

// Form Validation for email
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  if (input.value === ''){
    // Check if the input is empty
    errMsg.innerHTML = 'Please enter something';
    input.classList.add('border-red');

  } else if(!validURL(input.value)) {
    // Check if input is valid URL
    errMsg.innerHTML = 'Please enter a valid URL';
    input.classList.add('border-red');
  } else {
    // if it is a valid URL
    errMsg.innerHTML = ''
    input.classList.remove('border-red')
    // Shorten the link Backend should be here
    alert('Success!');

  }
  e.preventDefault();
}