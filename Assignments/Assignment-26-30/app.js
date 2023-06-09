 //Assignment- 26-30
// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var positiveNum =+prompt("PLease enter numbers of your choice.")  //a
// if (Math.sign(positiveNum)>0)
// {
//         console.log ("positive")
// }else if (Math.sign(positiveNum)<0) {
//         alert ("Please enter a positve number")
//         var positiveNum =+prompt("PLease enter numbers of your choice.")
// }
// var roundOff = Math.round(positiveNum)  //b
// var floorNum = Math.floor(positiveNum)  //c
// var ceilNum = Math.ceil(positiveNum)  //d

// document.write("<br>Number : "+positiveNum +"<br>Round Off value : "+roundOff
// +"<br>Floor value : "+floorNum+"<br>Ceil value : "+ceilNum)

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
//  var negativeNum =+prompt("PLease enter numbers of your choice.")  //a
// if (Math.sign(negativeNum)<0)
// {
//         console.log ("negative")
// }else if (Math.sign(negativeNum)>0) {
//         alert ("Please enter a negative number")
//         var negativeNum =+prompt("PLease enter numbers of your choice.")
// }
// var roundOff = Math.round(negativeNum)  //b
// var floorNum = Math.floor(negativeNum)  //c
// var ceilNum = Math.ceil(negativeNum)  //d

// document.write("<br>Number : "+negativeNum +"<br>Round Off value : "+roundOff
// +"<br>Floor value : "+floorNum+"<br>Ceil value : "+ceilNum)

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var userNum =+prompt("Enter any negative number to find it's absolute value.")
// var absoluteNum = Math.abs(userNum)
// document.write("<br>The absolute value of "+userNum+" is "+absoluteNum)
// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your
// browser:
// var rollDice = alert("Click 'OK' to roll the dice")
// var yourNum = Math.round(Math.random()*6+1)
// document.write("Your Random Dice number is "+yourNum+".")
// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value
// of coin in your browser
// var coinToss =alert("Click 'OK' to Toss the Coin")
// var yourToss = Math.random()
// if (yourToss<0.5) {
//         document.write("<br>Your random coin toss is 'Heads'")
// }else{
//         document.write("<br>Your random coin toss is 'Tails'")
// }
// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var randomNum = alert("Click 'OK' to get a number between 1-100")
// var yourNum = Math.round(Math.random()*99+1)
// document.write("Your Random number between 1-100 is "+yourNum+".")
// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var userWeight =+ prompt("Please enter your weight in kilograms")
// document.write("<br>Your weight is "+userWeight+" kilograms.")
// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret number, congratulate the user.
// var userNum =+prompt("Guess the secret number between 1-10")
// var randomSecretNum =Math.round(Math.random()*9+1)
// console.log(randomSecretNum)
// if (userNum===randomSecretNum) {
//         alert("Congratulations! You are good at it")
// }else{
//         alert("Try again!")
// }
