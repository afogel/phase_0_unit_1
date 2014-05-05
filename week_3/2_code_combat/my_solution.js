// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Mission 1 - Rescue Mission
// move down x2
// move right x1
// move up x2
// move right x2
// move down x2
// attack enemy

// Mission 2 -  Grab the mushroom
// move up
// move right
// move left
// move up
// attack enemy
 
 // Mission 3 - Drink Me
 // move right x2
 // attack enemy 
 // move down
 // move up
 // move right
 // attack enemy
 
 // Mission 4 - Taunt the Guards
// move right
// bust down door
// move right
// taunt guard
// move left x2
// command attack
// move right
// command team member to follow
// move right x2
// move up
// move right
// taunt guards
// move down
// move right
// move up
// move right
 
// Mission 5 - It's a Trap
// move down x2
// taunt guard
// move up x2
 
// Mission 6 - Taunt
// taunt x4

// Mission 7 - Cowardly Taunt
// Move to soldiers
// command soldiers to follow
// move to center of battlefield
// command soldiers to attack
// move back to safety in top right corner

// Mission 8 - Mobile Artillery
// Move to lower left
// attack ogres in bottom center of battlefield
// move to center of battlefield
// attack ogres in top right x2
// attack ogres in top left x2

// Reflection:
// Write your reflection here.

// * What is this referring to? Think programming-wise rather than in the terms of the game.
// "this" refers to the object that is being directed to move, attack or speak by whatever function is referenced
// after the ".". In other words, in the code "this.moveRight();", "this" is the object (Tharin), the "." indicates that
// whatever comes after the "." is going to manipulate "this", and "moveRight()" is the function that manipulates "this"
// (Tharin).

// * What does the () do in JavaScript?
// The () that appear after a function, for exacmple "this.moveRight();" are what functions use to accept parameters.
// Some functions in JS don't take any parameters, such as "moveRight()". Others, however, such as "this.say('string')"
// accept a string paramenter that the object "this" will "say".

// * What is the point of the semicolons?
// the purpose of the semicolon is to act as a delimiter. That way, if we have a function with many parameters, for example,
//  that extends beyond a single line, JavaScript knows that all the content that is before the semicolon is part of the 
//  function's parameters.
