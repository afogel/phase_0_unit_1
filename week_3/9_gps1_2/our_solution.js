// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ariel Fogel
//  2. Michele Murphy


// 1. "YOU SIGNED... WHO?!"
function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var edwardNorton = new Client("Edward Norton", 44, "You met me at a very strange time in my life");
var annaKendrick = new Client("Anna Kendrick", 28, "What? You've got juice pouches and Rocky!");

// Explanation of the constructor function:
// Constructor function is a good example of a DRY approach. it allows you to be as concise as possible
// in creating functions that will allow to pass a variety of parameters into the function?

// 2. "Here they Come!"
var adamSandler = new Client("Adam Sandler", 47, "That's your home, ball. Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...so you're telling me there's a chance? Yeah!");

var clientList = [edwardNorton, annaKendrick, adamSandler, kristenBell, jimCarrey];


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

// psuedocode
// our loop initiated
// log command "My client's name is:"+name
// log command "they are " + age + " years old"
// log command "they love to say " + quote
// log command: empty

for (var i = 0; i< clientList.length; i++){
    console.log("My client's name is: ", clientList[i].name);
    console.log("They are ", clientList[i].age, "years old.");
    console.log("They love to say ", clientList[i].quote);
    console.log();
};

// 5. "But wait, there's more!"

edwardNorton.showQuote = function() {
  console.log(edwardNorton.quote);
};

edwardNorton.showQuote();

// ** BONUS **


//  Your Reflection:
// *What parts of your strategy worked? What problems did you face?
// All parts of the strategy worked :) no problems at all!
// 
// What questions did you have while coding? What resources did you find to help you answer them?
// We weren't sure what the third syntax variation for 
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Did you learn any new skills or tricks?
// How confident are you with each of the Learning Competencies?
// Which parts of the challenge did you enjoy?
// Which parts of the challenge did you find tedious?