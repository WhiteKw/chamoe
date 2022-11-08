const express = require("express");
const path = require("path");
const app = express();

const userRouter = require("./routes/user");

app.listen(8080, function() {
    console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});