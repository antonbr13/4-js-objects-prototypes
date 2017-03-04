/*jshint esversion: 6 */

'use strict';

//Start coding here

function Animal(voice) {
   this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
   display(this.voice);
};


function Cat(name, color) {
   Animal.call(this);
   this.name = name;
   this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('fluffy', 'white');

fluffy.speak();

display(fluffy.__proto__.__proto__);
display(Object.keys(fluffy));
