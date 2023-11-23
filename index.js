function generatePassword() {
  var size = document.getElementById("size").value;

  var capitaLetter = document.getElementById("capitaLetter").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var SpecialCharacters = document.getElementById("SpecialCharacters").checked;

  var characters = "";

  if (capitaLetter) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (SpecialCharacters) characters += "!@#$%^&*()_+";
  if (numbers) characters += "0123456789";

  var password = "";
  for (var i = 0; i < size; i++) {
      var characterRandom = characters.charAt(Math.floor(Math.random() * characters.length));
      password += characterRandom;
  }

  const resultPassword = document.getElementById("password").value = password;

}

// copy password
document.getElementById("copy").addEventListener("click", function(){
  document.getElementById("password").select();
  document.execCommand('copy');
})