<h1>random-password-generator</h1>

A simple npm package that generates a random password with a specified length and complexity.


<h2>Installation </h2>

To install the package, simply run the following command:

```
npm install random-password-generator
```
<h2>Usage</h2>

Just use the 'generatePassword' method, with the appropriate password length and complexity, to begin using the package.

```js
const generatePassword = require('random-password-generator');

const password = generatePassword(10, true, true); // Generates a password with a length of 10 that contains lowercase and uppercase characters, numbers, and special characters.

console.log(password); // Output: "Fp#n9XZ7dK"
```

The `generatePassword` function takes in three optional parameters:

<ul>
<li>length: The desired length of the password (default is 8).
<li>hasNumbers: Whether or not the password should contain numbers (default is true).
<li>hasSpecialChars: Whether or not the password should contain special characters (default is true).
</ul>

<h2>Examples</h2>

Here are some examples of how you can use the `generatePassword` function:

```js
const generatePassword = require('random-password-generator');

const password1 = generatePassword(); // Generates a password with the default options (length of 8 that contains lowercase and uppercase characters, numbers, and special characters).

const password2 = generatePassword(12); // Generates a password with a length of 12 that contains lowercase and uppercase characters, numbers, and special characters.

const password3 = generatePassword(16, false, true); // Generates a password with a length of 16 that contains only lowercase and uppercase characters and special characters.

console.log(password1); // Output: "h@Q9XtLz"
console.log(password2); // Output: "Vp*Yt#n7lO$a"
console.log(password3); // Output: "cvW$zGxOyP%qTjK"
```

<h2>Contributing</h2>

If you find any bugs or issues with the package, please feel free to submit an issue or pull request on the GitHub repository.

