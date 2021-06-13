// Node.js wrapper function
// (function (exports, require, module, __filename, __dirname) {
//   //module code
// });


// using functions from another file
const funcs = require('./outside-functions');
funcs.smile();
funcs.sayHello();
console.log('smth else');
