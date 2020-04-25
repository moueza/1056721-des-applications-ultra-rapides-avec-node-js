var express = require('express');

var app = express();




//dyn
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});


app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

//app.get('/etage/1/chambre', function(req, res) {
//    res.setHeader('Content-Type', 'text/plain');
//    res.send('Hé ho, c\'est privé ici !');
//});
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});

//les routes dynamiques avant dyn (templates debut)
//marche pas : affiche ms tourne en rond
app.get('/templates-avant', function(req, res) {
    //res.setHeader('Content-Type', 'text/plain');//n affiche rien si tu mets ca
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Templates AV  Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
});
/**erreur 404*/
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

console.log("it is OK");
app.listen(8000);
