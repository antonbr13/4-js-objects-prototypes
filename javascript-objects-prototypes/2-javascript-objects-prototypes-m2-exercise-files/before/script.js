/*jshint esversion: 6 */
'use strict';



// Property Descriptors ------------------------

   // writable ----------------------------------------------------------------
      // defines whether or not a properties value can be changed from its initial value

         var cat = {
             name: {first:'Fluffy', last: 'shy'},
             color: 'White'
         };

         // keeps the property from being able to be editted by setting the writable Descriptor to false (some funky magic below overrides this)
         Object.defineProperty(cat, 'name', {writable: false});
         cat.name.first = 'stump';

         // shows the property Descriptors of the selected object ('cat' - below and 'name' and 'color' properties)
            display(Object.getOwnPropertyDescriptor(cat, 'name'));
            display(Object.getOwnPropertyDescriptor(cat, 'color'));

            display(cat.name.first + ' ' + cat.name.last);









   // enumerable --------------------------------------------------------------
      // by default properties on an object are enumerable meaning we can loop over them using a for in loops

      // for in loops
         var dog = {
            name  : {first: 'bobby', last: 'bredl'},
            color : 'golden'
         };

         // this code sets the enumerable Descriptor to false so our for in loop below cannot loop over the name key and thus it is no longer printed
         Object.defineProperty(cat, 'name', {enumerable: false});


         for (let prop in dog) {
               display(prop + ": " + dog[prop] );    // ---> will display the name of the property keys and values
         }


         // Print the object keys
          Object.keys(dog);

         // We need to display or log the above code to see its output
         display(Object.keys(dog));

         // Serializing dog object to JSON to output the whole object
         display(JSON.stringify(dog));




   // configurable --------------------------------------------------------------

      // the configurable Descriptor locks down a property to prevent certain attributes from being changed
         // it also prevents the property from being deleted from the object

      // can't changed the enumerable attribute, the configurable attribute (so you can't undo/override the configurable attribute), or delete the property in question - you can change the writable attribute however




// Getters and Setters ---------------------------------------------------------

   // these are attributes on a property that allow you to specify the return value of a property using a function and set the value of a property using a function and you can acces the property like you would any other property


   let parrot = {
      name  : {first: 'Polly', last: 'Crackers'},
      color : 'rainbow'
   };

   // to create getters and setters you have to use define property as below:

   Object.defineProperty(parrot, 'fullName', {
      get : function() {
         return this.name.first + ' ' + this.name.last;
      },
      set : function(value) {
         //splits given full name into an array
         var nameParts = value.split(' ');

         // sets the first index value [0] of the array to first name
         this.name.first = nameParts[0];

         // sets the second index [1] of the array to last name
         this.name.last = nameParts[1];

      }
   });

   // displays the default full name together as one string
   display(parrot.fullName);

   display(parrot.name.first);   // outputs --> 'Polly'
   display(parrot.name.last);    // outputs --> 'Crackers'

   //changes then displays the full name with setters
   parrot.fullName = 'Pirate Eyes';
   display(parrot.fullName);



   // also - the setters function alters the values of the individual properties as well
   display(parrot.name.first);   // outputs --> 'Pirate'
   display(parrot.name.last);    // outputs --> 'Eyes'






























//
