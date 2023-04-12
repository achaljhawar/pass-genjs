function generatePassword(length = 8, hasNumbers = true, hasSpecialChars = true) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    
    let charSet = lowercaseChars + uppercaseChars;
    
    if (hasNumbers) {
      charSet += numberChars;
    }
    
    if (hasSpecialChars) {
      charSet += specialChars;
    }
    
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    
    return password;
  }
  
  module.exports = generatePassword;
  