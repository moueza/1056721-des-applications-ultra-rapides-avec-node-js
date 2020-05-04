var EventEmitter = require('events').EventEmitter;
// : dc npm install

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});




jeu.emit('gameover', 'Vous avez perdu !');

////////////////////////////////////////

jeu.on('nouveaujoueur', function(nom,age){
    console.log('nom='+nom+' et age = '+age);
});
jeu.emit('nouveaujoueur', 'Mario', 35); // Envoie le nom d'un nouveau joueur qui arrive et son âge
