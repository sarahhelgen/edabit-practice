//write a function that converts hours into seconds

function howManySeconds(hours) {
    console.log('in howManySeconds');
    let seconds = hours * 60 * 60;
    return seconds;
}

console.log('5 hours is this many seconds', howManySeconds(5))

//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
//the formula (n-2) * 180 gives the sum of all angles of an n sided polygon

function sumPolygon(n) {
    let sumOfAngles = (n - 2) * 180;
    return sumOfAngles;
}

console.log('The sum of the angles of a 6 sided polygon is', sumPolygon(6));

//given two numbers, return true if the sum is less than 100. otherwise return false

function lessThan100(num1, num2) {
    let sum = num1 + num2;
    if (sum < 100) {
        return true;
    }//end if
    else {
        return false;
    } //end else

}//end lessThan100

//create a function that takes the number of wins, draws, and losses and calculates the number of points a team has accumulated
//wins: 3 points
//draws: 1 point
//losses: 0 points

function calculatePoints(wins, draws, losses) {
    let totalPoints = (wins * 3) + (draws * 1) + (losses * 0)
    return totalPoints;
}

console.log('Total points is', calculatePoints(3, 4, 5));

//create a function that calculates the number of legs of animals that a farmer has.
//chickens: 2 legs
//cows: 4 legs
//pigs: 4 legs

function calculateAnimalLegs(chickens, cows, pigs) {
    let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
    return totalLegs;
}

console.log('The total number of farm animal legs is', calculateAnimalLegs(8, 9, 10));

//JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// Consider a && b:
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
// Make a function using the && operator.

function checkAAndB(a, b) {

    if (a = false) {
        return false;
    } else if (b = false) {
        return false;
    } else if (a && b)
        return true;

}

//You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words 
//and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).//
//OUTPUT: 1 for correctly typed words, -1 for incorrectly typed words'

function checkSpelling(userArray, correctArray) {

    for (let i = 0; i < userArray.length; i++) {
        let result = [];
        if (userArray[i] == correctArray[i]) {
            result.push(1)
        }//end if check
        else {
            result.push(-1)
        }//end else
    }//end for loop
    return result;
}

//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function checkTheArgs(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    } else {
        return false;
    }
}

//Create a function that takes a boolean variable flag and returns it as a string.

function returnAsString( flag ){
    let string = flag.toString();
    return string;
}

// Create a function that takes a string and returns the concatenated first and last character.

function concatenateLetter ( string ) {
    let concatenation = string[0] + string[string.length -1];
    return concatenation;
}

//You are counting points for a basketball game, given the amount of 2-pointers 
//scored and 3-pointers scored, find the final points for the team and return that value.

function calculatePoints ( twoPointers, threePointers) {
    let score = twoPointers * 2 + threePointers * 3;
    return score;
}

//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convertToSeconds( hours, minutes ) {
    let conversionofHours = hours * 60 * 60;
    let conversationOfMinutes = minutes * 60;
    let totalConversation = conversationOfMinutes + conversionofHours;
    return totalConversation;
}

//Create a function that takes two arguments. Both arguments are 
//integers, a and b. Return true if one of them is 10 or if their sum is 10.

function sumTen ( a, b ){
    if (a == 10 || b == 10 ){
        return true;
    } else if ( a + b == 10){
        return true;
    } else{
        return false;
    }
}