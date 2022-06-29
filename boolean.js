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
function testElse(val) {
    let result;
    if(val > 5){
        result = 'Bigger than 5';
    }else{
        result = '5 or Smaller';
    }
    return result;
}
console.log(testElse(4))