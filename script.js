/**
 * Topics cover: 
Comment
Declare variable

Assigning values with the assignment operator
Assign the value of one variable to another
Initializing variable with the assignment operator

Declare String variables
Understanding uninitialize variable
Understanding the case sensitive in variable
Explore the differences between the var and let keyword.
Declare a read-only with the const keyword
Add two numbers with javascript
Subtract One Number from Another with JavaScript
Multiply two numbers with javascript
Divide one number by another with javascript
Increment a number with javascript
Decrement a number with javascript
Multiply two decimal with javascript
Divide one decimal by another with javascript
Finding a remainder with javascript
Compound assignment with augmented addition
Compound assignment with augmented subtraction
Compound assignment with augmented multiplication
Compound assignment with augmented division
Escaping Literal quotes in strings
Quoting string with a single quote
Escape sequences in stringscaten
Concatenating Strings with plus operator
Constructing strings with variables
Appending variables to strings
Find the length of a string
Use bracket notation to find the first character in a string
Understand string immutability
Use bracket notation to find  the nth character in a string
Use bracket notation to find  the last character in a string
Use bracket notation to find  the second to last character in a string
Store multiple values in one variable using javascript arrays
Nest one array with-in another array
 * 
 * 
 */
//Declare variable
var myName;
var a = 7;
var b = 4;

var c = 5;
var d;
var d = c;

var myFirstName = 'Samuel';

var a1 = 5;
var b1 = 10;
var c = 'I am a';

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// Increment a number with JavaScript
let myVar = 87;
// myVar = myVar + 1;
myVar++;
// console.log(myVar);
// Decrement a number with JavaScript

let myVar1 = 11;
myVar1--;
// console.log(myVar1);

//create decimal numbers with javascript
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.7;

//Multiply one decimal by another in javascript

const quotient1 = 2.0 * 2.5;
//Devide one decimal by another in javascript
const quotient2 = 4.4 / 2.0; // Change this line

/**
 * Finding a Remainder in JavaScript
The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
 */

const remainder = 11 % 3;
// console.log(remainder);

//Compound Assignment With Augmented Addition
let a2 = 3;
let b2 = 17;
let c2 = 12;

// Only change code below this line
a2 += 3;
b2 += 9;
c2 +=7;
// console.log(a2, b2, c2);


//Escaping Literal quotes in strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
console.log(myStr);
console.log('================================');

//Quoting Strings with Single Quotes
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1);

//Escape Sequences in Strings
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " +" "+ myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + myAdverb; // Change this line

//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['Sam', 33];

//Nest one Array within Another Array
//This is also called a multi-dimensional array.
//where every element in the array is an array

const myArray1 = [['Sam', 33], ['Joe', 20]];


//Access Array Data with Indexes
const myArray2 = [50, 60, 70];
const myData = myArray2[0]

// Modify Array Data With Indexes
// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
const myArray3 = [18, 64, 99];
myArray3[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray4[2][1];

  //Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

const list = [["John", 23], ["cat", 2]];

// Only change code below this line
list.push(['dog', 3]);

//Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const popArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = popArray.pop();

//Manipulate Arrays With shift()
// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
const list1 = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray1 = list1.shift();

//Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
const list2 = [["John", 23], ["dog", 3]];
list2.shift();

// Only change code below this line
list2.unshift(["Paul", 35])

// Write Reusable JavaScript with Functions

// In JavaScript, we can divide up our code into reusable parts called functions.
function reusableFunction() {
    console.log('Hi world');
}
reusableFunction();

//Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments. Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//     console.log(param1, param2);
//   }
//   Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.
  
//   Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//   Call the function with two numbers as arguments
function functionWithArgs(num1, num2){
    console.log(num1 + num2);
  }
  functionWithArgs(5,15);

  //Return a Value from a Function with Return
//   We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

//   Example
  
//   function plusThree(num) {
//     return num + 3;
//   }
  
//   const answer = plusThree(5);
//   answer has the value 8.
  
//   plusThree takes an argument for num and returns a value equal to num + 3.
  
//   Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num){
    return num * 5;
  }
  const result = timesFive(5);

//Global Scope and Functions
// Global Scope and Functions
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

// Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal = 10;
var oopsGlobal;

function fun1(){
      // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

//Only change code above this line
function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output+= "myGlobal " + myGlobal;
    }
    if(typeof oopsGlobal != 'undefined'){
        output+= "oopsGlobal " + oopsGlobal;
    }
    console.log(output);
}
fun1()
fun2()
//Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// Here is a function myTest with a local variable called loc.

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);
// The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
function myLocalScope() {
    // Only change code below this line
    let hisVar;
  
    console.log('inside myLocalScope', hisVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', hisVar);

//Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// The function myFun will return the string Head because the local version of the variable is present.

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

//Global vs. Local Scope in Functions
