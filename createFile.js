const fs = require('fs');


const content = 'Hello Node';
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File "welcome.txt" created successfully.');
  }
});
