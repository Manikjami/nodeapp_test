var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From manik" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello manik" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It is working!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
