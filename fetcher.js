// collect data from command line
const argumentsFromCommandLine = process.argv.slice(2);
const domain = argumentsFromCommandLine[0];
const path = argumentsFromCommandLine[1];

// require file system and request library
const fs = require('fs');
const request = require('request');

request(`${domain}`, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(`${path}`, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`);
  });
});