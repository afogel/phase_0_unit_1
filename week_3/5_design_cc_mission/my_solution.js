// I worked [by myself, with:] on this challenge
// with Lauren Kroner

// Your mission description:
// We have three characters:

// 1. Princess 
// 2. Black Knight
// 3. Valiant Knight & his Squire Patsy

// The Black Knight has captured the Princess and has whisked her away to his dark liar, Castle Gorglelele. 
// The Valiant Knight (with the help of his Squire Patsy) must navigate through a field a brambles to reach the castle, fight the Dark Knight, 
// rescue the Princess and then escape.
// 
// 

// Pseudocode
//
// Objects: Define initial states and properties:
// Princess position
// Black Knight position, health
// Valiant Knight position
// Shrubbery #1 position, health
// Shrubbery #2 position, health
// Door position, health

// Functions: 
// Move Right: Add 1 to x coordinate
// Move Left: Subtract 1 to x coordinate
// Move Up: Add 1 to y coordinate
// Move Down: Subtract 1 to y coordinate
// Attack: Subtract 1 unit of health

// Move right 2x
// Move up 1x
// Attack shrubbery
// Move up 2x
// Move right 1x
// Attack shubbery 3x
// Move right 3x
// Attack Black Knight
// Move right 1x
// Attack door
// Move right 2x

// Grid/Map  (7x10)
//                P
//                D
//     .  . S . . B . .    
//     S
//     .
// K . . 


// Initial Code
//create constructor functions
function gameObject(name, posx, posy, health) {
    this.name = name;
    this.posx = posx;
    this.posy = posy;
    this.health = health;
};

//construct objects

var valiantKnight = new gameObject("Valiant Knight",0,0,1);
var blackKnight = new gameObject("Black Knight", 7, 3, 1);
var princess = new gameObject("Princess Peach", 7, 5, 999);
var shrubberyOne = new gameObject("Shrubbery One", 2, 2, 1);
var shrubberyTwo = new gameObject("Shrubbery Two", 4, 3, 3);
var castleDoor = new gameObject("Castle Door", 7, 4, 1);

gameObject.prototype.moveRight = function() {
  this.posx = this.posx + 1; 
  return this.posx;
}

gameObject.prototype.moveLeft = function() {
  this.posx = this.posx - 1; 
  return this.posx;
}

gameObject.prototype.moveUp = function() {
  this.posy = this.posy + 1; 
  return this.posy;
}

gameObject.prototype.moveDown = function() {
  this.posy = this.posy - 1; 
  return this.posy;
}


gameObject.prototype.attack = function(character) {
    character.health = character.health - 1;
    return character.health;
}


valiantKnight.moveRight();
valiantKnight.moveRight();
valiantKnight.moveUp();
valiantKnight.attack(shrubberyOne);
valiantKnight.moveUp();
valiantKnight.moveUp();
valiantKnight.moveRight();
valiantKnight.attack(shrubberyTwo);
valiantKnight.attack(shrubberyTwo);
valiantKnight.attack(shrubberyTwo);
valiantKnight.moveRight();
valiantKnight.moveRight();
valiantKnight.moveRight();
valiantKnight.attack(blackKnight);
valiantKnight.moveRight();
valiantKnight.attack(castleDoor);
princess.moveDown();
valiantKnight.moveRight();
princess.moveDown();
valiantKnight.moveRight();
princess.moveRight();
princess.moveRight();

function assert(test, message) {
  if (!test) {
    console.log("false");
    throw "ERROR: Did not reach final destination";
  }
  console.log("true" + message);
  return true;
}

console.log(valiantKnight);
console.log(princess);
assert(valiantKnight.posx===9 && valiantKnight.posy===3, "Knight reached final destination");
assert(princess.posx===9 && princess.posy===3, "Princess reached final destination");

// Refactored Code
//move a number of spaces
gameObject.prototype.moveRight = function(number) {
  this.posx += number; 
  return this.posx;
}

gameObject.prototype.moveLeft = function(number) {
  this.posx -= number; 
  return this.posx;
}

gameObject.prototype.moveUp = function(number) {
  this.posy += number; 
  return this.posy;
}

gameObject.prototype.moveDown = function(number) {
  this.posy -= number; 
  return this.posy;
}

gameObject.prototype.attack = function(character,number) {
    character.health -= number;
    return character.health;
}

valiantKnight.posx = 0;
valiantKnight.posy = 0;
princess.posx = 7;
princess.posy = 5;

valiantKnight.moveRight(2);
valiantKnight.moveUp(1);
valiantKnight.attack(shrubberyOne,1);
valiantKnight.moveUp(2);
valiantKnight.moveRight(1);
valiantKnight.attack(shrubberyTwo,3);
valiantKnight.moveRight(3);
valiantKnight.attack(blackKnight,1);
valiantKnight.moveRight(1);
valiantKnight.attack(castleDoor,1);
princess.moveDown(1);
valiantKnight.moveRight(1);
princess.moveDown(1);
valiantKnight.moveRight(1);
princess.moveRight(2);

console.log(valiantKnight);
console.log(princess);
assert(valiantKnight.posx===9 && valiantKnight.posy===3, "Knight reached final destination");
assert(princess.posx===9 && princess.posy===3, "Princess reached final destination");

// Reflection
// 
// 
// 
// 
// 
// 
// 
// 