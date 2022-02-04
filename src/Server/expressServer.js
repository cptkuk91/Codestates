const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", 'utf-8'),
      cert: fs.readFileSync(__dirname + "/cert.pem", 'utf-8'),
    },
    app.use('/', (req, res) {
      res.send("HTTPS Server Working");
    })
  )
  .listen(3001)