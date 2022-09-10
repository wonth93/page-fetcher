// collect data from command line
const argumentsFromCommandLine = process.argv.slice(2);
const domain = argumentsFromCommandLine[0];
const path = argumentsFromCommandLine[1];

// require file system and request library
const fs = require('fs');
const request = require('request');


const downloadpage = function(url, downloadPath, callback) {
  request(url, (error, response, body) => {
    if (error !== null && response.statusCode !== 200) {
      return console.log(`Error Code: ${response.statusCode} FYI...`);
    } else {
      return callback(url, downloadPath);
    }
  });
};

const message = function(link, way) {
  request(link, (error, response, body) => {
    fs.writeFile(way, body, err => {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${way}`);
    });
  });
};

downloadpage(domain, path, message);