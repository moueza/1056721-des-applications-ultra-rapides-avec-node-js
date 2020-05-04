//from p2c2 modules
//https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1057364-les-modules-node-js-et-npm


var monmodule = require('./monmodule');

monmodule.direBonjour();
monmodule.direByeBye();



//////////////////////
var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));








var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
.use(function(req, res){ // Répond enfin
    res.send('Hello');
});

app.listen(8000);

