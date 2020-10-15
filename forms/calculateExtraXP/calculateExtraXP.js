/*
Code from the calculate form has been copied and pasted into a new form named calculateExtraXP.

Removed all the 'let' commands from the copy (so you aren't re-creating the variables).

Asks the user if they want to do an average calculation or a random multiplication.

Gets a number from the user.

Uses a newly created function named randomMultiply that takes 1 parameter and multiplies 
a random number between 1 and 10 with the parameter number. Then returns the answer. 

Calls the appropriate function from the main program. 
Outputs the answer in an alert window with a template literal using this format: 

The result of multiplying the random number 9 with 100 is 900.

All user input and output is in main program, not in the function.
Code is all commented out. 
Program runs without error.
*/

/*
function randomMultiply(num1) {
  random = Math.floor(Math.random() * 10) + 1
  product = num1 * random
  alert(`The result of multiplying the random number ${random} with ${num1} is ${product}.`)
}

//Main Program
let mathType = prompt("Would you like to do an average calculation or a random multiplication?")
let updatedMathType = mathType.toLowerCase()

if (updatedMathType == "average calculation") {
  a = Number(prompt("Insert First Number:"))
  b = Number(prompt("Insert Second Number:"))
  c = Number(prompt("Insert Third Number:"))
  alert(`The answer is ${calcAvgSquare(a, b, c)}.`)
} else if (updatedMathType == "random multiplication") {
  number = Number(prompt("Insert a Number:"))
  randomMultiply(number)
} else {
  alert(`Not a valid input.`)
}
*/