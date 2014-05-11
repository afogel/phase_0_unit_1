
Welcome to Stypi!

Stypi is a realtime editor that allows multiple users to make changes to a single document at the same time. All you need to do is share the URL with others to begin collaborating!

This editor also supports programming languages that you can access by clicking on the "</>" button on the top left. For more information on how to use Stypi please click the FAQ link on the bottom left.

// I paired [by myself, with:] on this challenge.
// with Arik




// Pseudocode
// Create a variable that is a number.
// Set variable 'secretNumber' equal to 7.
// 
// Create a variable password that is a string.
// Set the variable password to 'just open the door.'

// Create a variable allowedIn that is a boolean.
// Set the variable allowedIn equal to false. 

// Create an array called members 
// Make sure that the first element of members is the string 'John', and the fourth element is 'Mary.' 
// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ['John', 'Jesus','Joseph', 'Mary'];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

//When we read through the psuedocode as we were attempting to write the code, it seemed more reasonable to simply combine 
//the two steps into one for the purpose of DRYness. This was based off of an intuitive, gut impulse to write DRY code. 
//We found it very straightforward. 



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// *What parts of your strategy worked? What problems did you face?
// This challenge was fairly easy and straightforward for both of us, so we faced no problems.
// 
// *What questions did you have while coding? What resources did you find to help you answer them?
// None :)
// 
// *What concepts are you having trouble with, or did you just figure something out? If so, what?
// I'm not having any trouble with any concepts right now.
// 
// *Did you learn any new skills or tricks?
// Not really, but it was nice to practice psuedo-coding.
// 
// *How confident are you with each of the Learning Competencies?
// I'm feeling very comfortable with all of the learning competencies.
// 
// *Which parts of the challenge did you enjoy?
// Meh, it seemed pretty basic...not a ton to enjoy.
// 
// *Which parts of the challenge did you find tedious?
// Nothing seemed tedious either. We got through the challenge within 20 minutes or so.


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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

