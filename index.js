const { styleText } = require('node:util');
const errorMessage = styleText('red', 'Error! Error!');
console.log(errorMessage);
