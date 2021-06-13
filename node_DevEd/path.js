const path = require('path');

const fileLocation = path.join(__dirname, 'app.js');
console.log(fileLocation);  // the same as __filename

const fileName = path.basename(__filename);
console.log(fileName);

const fileExtension = path.extname(__filename);
console.log(fileExtension);
