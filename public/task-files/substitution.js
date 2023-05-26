// Encryption function
function encrypt(message, key) {
    var encryptedMessage = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var uppercaseMessage = message.toUpperCase();
  
    for (var i = 0; i < uppercaseMessage.length; i++) {
      var char = uppercaseMessage[i];
      var index = alphabet.indexOf(char);
  
      if (index !== -1) {
        var encryptedChar = key[index];
        encryptedMessage += encryptedChar;
      } else {
        encryptedMessage += char;
      }
    }
  
    return encryptedMessage;
  }
  
  // Decryption function
  function decrypt(encryptedMessage, key) {
    var decryptedMessage = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var uppercaseEncryptedMessage = encryptedMessage.toUpperCase();
  
    for (var i = 0; i < uppercaseEncryptedMessage.length; i++) {
      var char = uppercaseEncryptedMessage[i];
      var index = key.indexOf(char);
  
      if (index !== -1) {
        var decryptedChar = alphabet[index];
        decryptedMessage += decryptedChar;
      } else {
        decryptedMessage += char;
      }
    }
  
    return decryptedMessage;
  }
  
  // Example usage
  var message = "GMPMUD{BEJU_AEAFZXK_ZXWHFXHT}";
  var key = "XPMGTDHLYONZBWEARKJUFSCIQV";
  
  var encryptedMessage = encrypt(message, key);
  console.log("Encrypted message:", encryptedMessage);
  
  var decryptedMessage = decrypt(encryptedMessage, key);
  console.log("Decrypted message:", decryptedMessage);