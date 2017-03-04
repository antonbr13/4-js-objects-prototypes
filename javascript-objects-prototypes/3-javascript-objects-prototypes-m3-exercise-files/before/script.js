/*jshint esversion: 6 */

'use strict';

//Start coding here

var arr = ['red', 'blue', 'green'];
var arr2 = ['a', 'b', 'c', 'd'];

// The familiar array syntax above is short for using the Array function
   // The Array function is meant to be used as a constructor function - see below:

var arr3 = new Array('boy', 'girl', 'z', 'y', 'z', 'they');

// Above is the same as: var arr3 = ['boy', 'girl', 'z', 'y', 'z', 'they'];


var lastIndex = arr[arr.length - 1];


// This must be set to the Array.prototype in oder for it to work on all arrays
Object.defineProperty(Array.prototype, 'last', {get:  function() {
   return this[this.length - 1];
}});

display("The last array index item is being displayed for a specific array:")
display(lastIndex);

display("Below is the array in question:")
display(arr);

var last = arr.last;


display("The last array index item is being displayed via a 'Array.prototype' that can be used on all arrays to produce the last index:")
display(last);



display("Below is the second array:")
display(arr2);
display(arr2.last);


display("Below is the third array:")
display(arr3);
display(arr3.last);


display("---------------------------------------------------------------")

// What is a prototype??
   // can't use arrow functions here
display("What is a prototype??")

let myfunc = function () {

}

display(myfunc.prototype);
let myObj = {name: 'anton'};
display(myObj);
display(myObj.__proto__);

display("Cat Function")

let Cat = function(name, color) {
   this.name  = name;
   this.color = color;
};

let fluffy = new Cat('fluff', 'white');
Cat.prototype.age = 3;
display(Cat.prototype);

display(fluffy);
display(fluffy.__proto__);

// will display 'true' because they are the same instance
display(Cat.prototype === fluffy.__proto__);
