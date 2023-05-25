const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

var homeRouter = require('./routes/home');
var pageRouter = require('./routes/board');
var mysqlRouter = require('./routes/mysql');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use(express.json()); 
// app.use(express.urlencoded( {extended : false } ));
app.use('/home', homeRouter);
app.use('/board', pageRouter);
app.use('/mysql', mysqlRouter);


app.listen(8080, () => {
  console.log("listening on 8080");
});