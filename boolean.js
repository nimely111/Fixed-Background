function testGreaterThan(val){
    if(val > 100){ //change this line
        return 'over 100'; 
    }
    if(val > 10){ //change this line
        return 'over 10';
    }
        return '10 or Under';
}
console.log(testGreaterThan(10));