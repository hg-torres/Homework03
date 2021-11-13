function generatePassword(possible, length) {
  var result = '';
  for (var i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
}

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let numbers = "0123456789";

document.getElementById('verifyLength').addEventListener('click', ()=> {
  let length = document.getElementById('passwordLength').value
  console.log(length)

  if((length < 8) || (length > 128)){
    alert(`Please enter a value between 8 and 128`)
  } else {
    var collapseElem = document.getElementById("toggleCollapse")
    collapseElem.classList.add("show")
  }
});

document.getElementById('myBtn').addEventListener('click', event => {
  event.preventDefault()
  let length = document.getElementById('passwordLength').value
  let possible = "";

  if ((length < 8) || (length > 128)) {
    alert(`Please enter a value between 8 and 128`)
  } else {
    let lowercaseConfirm = document.getElementById('lowercase').checked;
    console.log(lowercaseConfirm);
    let uppercaseConfirm = document.getElementById('uppercase').checked;
    console.log(uppercaseConfirm);
    let numberConfirm = document.getElementById('numbers').checked;
    console.log(numberConfirm);
    let specialCharConfirm = document.getElementById('specialChar').checked;
    console.log(specialCharConfirm);

    console.log((!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !specialCharConfirm));

    if (!uppercaseConfirm && !lowercaseConfirm && !numberConfirm && !specialCharConfirm) {

      alert(`Please select at least one criteria for your password.`)
    }
    else {

      if (document.getElementById('lowercase').checked) {
        possible += lowercase;
      }
      if (document.getElementById('uppercase').checked) {
        possible += uppercase;
      }
      if (document.getElementById('numbers').checked) {
        possible += numbers;
      }
      if (document.getElementById('specialChar').checked) {
        possible += specialChar;
      }
    }
  }

  let generatedPassword = generatePassword(possible, length)
  document.getElementById('passwordTextField').innerHTML = `
        <p>${generatedPassword}</p>
      `
}
);