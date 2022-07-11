//Q1 Store Mark's and John's mass and height in variables.

const markHeight = 1.83, markMass = 80, johnHeight = 1.68, johnMass = 50;

//Q2 Calculate both their BMIs and store their BMIs in variables. 

const marksBMI = markMass / (markHeight * markHeight);
const johnsBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const marksBmiHigher = marksBMI > johnsBMI;

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

console.log(`Is Mark's BMI higher than John's? Why yes, it's ${marksBmiHigher}, it is`);


//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if (marksBMI > johnsBMI) {
    console.log('Mark`s BMI is higher than John`s.');
} else {
    console.log('John`s BMI is higher than Mark`s.');
}