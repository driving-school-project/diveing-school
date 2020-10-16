var express = require('express');
var bodyParser = require('body-parser');
var user = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/user', urlencodedParser, function (req, res) {
  user.create(req.body, (err, data) => {
    if (data) {
      console.log("Created New User")
      res.send("Created New User")
      res.end()
    }
    if (err) {
      res.send("Write another Username")
      res.end()
    }
  })
});


app.post('/updateOne', urlencodedParser, function (req, res) {

  user.updateOne({ username: req.body.username }, { password: req.body.password }, (err, dat) => {
    if (dat) {
      res.send("updated")
      res.end()
    }
  })
});

app.post('/removeOne', urlencodedParser, function (req, res) {

  user.removeOne({ username: req.body.username }, { password: req.body.password }, (err, dat) => {
    if (dat) {
      res.send("Removed")
      res.end()
    }
  })
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

