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

document.getElementById('myBtn').addEventListener('click', event => {
  event.preventDefault()
  let length = document.getElementById('passwordLength').value
  let possible = "";

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

  let generatedPassword = generatePassword(possible, length)

  console.log(generatedPassword)

  // let userElem = document.createElement('div')
  // userElem.innerHTML = `
  //       <p>${generatedPassword}</p>
  //     `
  // document.getElementById('passwordTextField').innerHTML = userElem.innerHTML

  document.getElementById('passwordTextField').innerHTML = `
        <p>${generatedPassword}</p>
      `

}
);