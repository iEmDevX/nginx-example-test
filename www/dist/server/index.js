const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, '../use-ivy/')));



// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());


app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../use-ivy/index.html'));
});

// start server
app.listen(3002, () => console.log(`Server started at port : ${3002}`));