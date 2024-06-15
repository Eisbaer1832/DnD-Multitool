const express = require('express')
const path = require('path')
const app = express();
const port = 2020;
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('express');
const favicon = require('serve-favicon');
var $ = require('jquery');

//app.use(express.json())
//app.use(favicon(path.join(__dirname, '/', 'favicon.ico')));


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));

app.get('/', (_, res) => {
  res.sendFile('public/html/index.html', {root: __dirname })});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)})


app.post('/public/check_code', function(req, res) {
  let check_code = req.body.code;
  let status = false
  if (check_code == "1" || "Eins" || "eins") {
    res.send("true")
  }else{
    res.send("false")}
});