const fs = require('fs');

// Reading from the file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('Data from welcome.txt:', data);
  }
});
