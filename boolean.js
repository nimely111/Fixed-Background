// function testGreaterThan(val){
//     if(val > 100){ //change this line
//         return 'over 100'; 
//     }
//     if(val > 10){ //change this line
//         return 'over 10';
//     }
//         return '10 or Under';
// }
// console.log(testGreaterThan(10));

// else statements
// function testElse(val) {
//     let result;
//     if(val > 5){
//         result = 'Bigger than 5';
//     }else{
//         result = '5 or Smaller';
//     }
//     return result;
// }
// console.log(testElse(4))

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
// if(strokes == 1){
//   return names[0]
// }else if(strokes <= par -2){
//   return names[1]
// }else if(strokes == par - 1){
//   return names[2]
// }else if(strokes == par){
//   return names[3]
// }else if(strokes == par +1){
//   return names[4]
// }else if(strokes == par +2){
//   return names[5]
// }else{
//   return names[6];
// }
//   // Only change code above this line
// }

// console.log(golfScore(3, 4));

//switch statements
// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//     case 1:
//       answer = 'alpha'
//       break;
//      case 2:
//       answer = 'beta'
//       break;
//      case 3:
//       answer = 'gamma'
//       break;
//      case 4:
//       answer = 'delta'
//       break;
//   }
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   console.log(caseInSwitch(3));

//Accessing Object Properties with Dot Notation
// Setup
// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };

// // Only change code below this line
// const hatValue = testObj.hat;      // Change this line
// const shirtValue = testObj.shirt;    // Change this line

//Accessing Object Properties with bracket Notation

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line
