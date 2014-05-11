// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name : "Carson"};
terah.children.carter = {name : "Carter"};
terah.children.colton = {name : "Colton"};
adam.children = terah.children;







// __________________________________________
// Reflection: Use the reflection guidelines
// 
// *What parts of your strategy worked? What problems did you face?
// I initially had an issue with trying to use dot notation to access the property of the three children before
// I had created each child (e.g. after creating "terah.children ={}", 
//   I tried to run "terah.children.carson.name = 'Carson'"). The first strategy that I employed to overcome the 
// challenge was by first initializing each child (e.g. "terah.children.carson = {}"), then using the code I originally
// tried. After completing the challenge, though I went back to refactor the code to be more D.R.Y.
// 
// *What questions did you have while coding? What resources did you find to help you answer them?
// I relied heavily on both the course reading that was required and supplemented it with the codecademy materials 
// on JavaScript.
// 
// *What concepts are you having trouble with, or did you just figure something out? If so, what?
// Thankfully, I'm not having any trouble with understanding the object literal syntax for creating objects :)
// 
// *Did you learn any new skills or tricks?
// Yup! I learned that you can't implicitly create an object property simply by including it in your ultimate
// property "tree". So the form of "terah.children.carson = {name : "Carson"};", for example, is a good way of
// 'skipping' a step.
// 
// *How confident are you with each of the Learning Competencies?
// I feel very confident  with each of the Learning Competencies.
// 
// *Which parts of the challenge did you enjoy?
// This challenge was fairly straightforward and enjoyable :)
// 
// *Which parts of the challenge did you find tedious? 
// None!


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
