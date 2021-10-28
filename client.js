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

