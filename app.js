var express = require ('express'); 
var app = express();
app.get('/', function (req, res) {
    res.send('Oi desenvolvedores!');
});
app.listen(3000, function() {
    console.log('Ouvindo na 3000! Branch de Dev. Acesse: http://localhost:3000');
});
