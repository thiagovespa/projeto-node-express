var express = require ('express'); 
var app = express();
app.get('/', function (req, res) {
    res.send('Oi dev local!');
});
app.listen(3000, function() {
    console.log('Ouvindo na 3000! Branch de feature. Acesse: http://localhost:3000');
});
