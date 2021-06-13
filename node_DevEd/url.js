const { URL } = require('url');

const address = 'https://forum.example.com/homepage.html?year=2021&month=june';
const parsedAddress = new URL(address);

console.log(parsedAddress.hostname);  // forum.example.com
console.log(parsedAddress.pathname);  // /homepage.html 
console.log(parsedAddress.searchParams.getAll('year'));  // [ '2021' ]
