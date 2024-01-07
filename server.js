const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

const port = 8080;
const hostname = '0.0.0.0';

const MainHome = fs.readFileSync('main.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Context-Type', 'text/html');
  res.write(MainHome);
  res.end();
  
})
server.listen(port, hostname , () => {
  console.log("Server is now running! ")
});