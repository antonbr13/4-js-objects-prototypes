/*jshint esversion: 6 */

var ariana = {
   hair  : 'brown',
   eyes  : 'brown',
   brain : 'smart'
};

display('Ariana is ' + ariana.brain);
display('She has ' + ariana.hair + ' hair and ' + ariana['eyes'] + ' eyes.');

display('she says funny things some times....');
ariana['saysFunnythings'] = function() {
   display('do you want to get married?')
};

ariana.saysFunnythings();
display('ME: hahhahaha - you say funny things');



let Friends = function (name, school, hobby, hometown) {
   this.name     = name;
   this.school   = school;
   this.hobby    = hobby;
   this.hometown = hometown;
};

let ariana2 = new Friends('Ariana', 'UW', 'Photography', 'Surey');
let paul    = new Friends('Paul', 'Clark', 'Basketball', 'Vancouver');
let danny   = new Friends('Danny', 'Stanford', 'Yoga', 'Portland');
let sim     = new Friends('Simeon', 'FAMU', 'Business', 'Gresham');

display(ariana2, paul, danny, sim);




// ES6 Classes to Create JS Objects

class Team {
   constructor(name, sport, players) {
      this.name    = name;
      this.sport   = sport;
      this.players = players;
   }
}

let rapters = new Team('Toronto Rapters', 'NBA', '13');
let hawks   = new Team('Seattle Seahawks', 'NFL', '53');

hawks.cheer = function() {
   display('Go Hawks - Go 12s');
};
hawks.cheer();

display(rapters, hawks);
























//
