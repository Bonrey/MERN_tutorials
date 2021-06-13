const fs = require('fs');

// fs.writeFile('./files/output.txt', 'Some text', error => {
//   if (error) {
//     throw error;
//   }
//   console.log('The file has been created!');
// });

fs.readFile('./files/input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data.split(/\s/));
});



