/*jshint esversion: 6 */

'use strict';

//Start coding here


let Dog = function (name, color) {
   this.name  = name;
   this.color = color;
}

Dog.prototype.age = 5;
let bowser = new Dog ('Bowser', 'white');
let bobby = new Dog ('Bobby', 'golden');

bowser.age = 6;



display(bowser, bobby);

display('below is using the prototype assigned age of bowser')
display(bowser.__proto__);

display('below is your the property age which has been directly assigned for bowser')
display(bowser.age);

// bobby does not have its own age property even though it has access to an age value via the prototype
display('bobby has no age property where bowser does');
display('bobby |', Object.keys( bobby));
display('bowser |',  Object.keys(bowser));
