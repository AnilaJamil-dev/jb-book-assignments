// Assignment-9&10
// 1. Write a program to take “city” name as input from user. If user enters “Karachi”,
// welcome the user like this: “Welcome to city of lights”
// var userCity = prompt("Enter Your City name")
//         if (userCity==="Karachi"||"karachi"){ 
//         alert("“Welcome to the city of lighhts”")     
//         }
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: 
// Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var userGender = prompt("Write your gender please");
// if (userGender==="male"){
//         alert("Good Morning Sir!");
// }else if (userGender==="female"){
//         alert("Good Morning Ma'am!");
// }else{
//         alert("Invalid input. Please enter either 'male' or 'female'.");
// }
// 3. Write a program to take input color of road traffic signal from the user & show the message according
// to this table:
// var trafficSignal = prompt("Write the name of any color of traffic signal")
// if (trafficSignal=== "red"){
//         alert("Must Stop!")
// }else if(trafficSignal==="yellow"){
//         alert("Ready to move")
// }else if(trafficSignal==="green"){
//         alert("Move now")
// }else {
//         alert("Please select colors among red,yellow or green!")
// }
// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel 
// is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuelInLiters = prompt("Please enter your car fuel in liters")
// if (fuelInLiters >=0.25){
//        alert("You are good to go!")
// }else if(fuelInLiters<=0.25){
//         alert("“Please refill the fuel in your car”")
// }
// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;  //a (alert displayed)
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;    //b(alert not displayed)
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;    //c
// if (c++ === 13){
// alert("condition 1 is true");  //(alert not displayed)
// }
// if (c === 13){
// alert("condition 2 is true");  //(alert displayed)
// }
// if (++c < 14){
// alert("condition 3 is true");  //(alert not displayed)
// }
// if(c === 14){
// alert("condition 4 is true");   //(alert displayed)
// }
// var materialCost = 20000;  //d (alert displayed)
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){    //e
// alert("True");   //(alert displayed)
// }
// if (false){  //(alert not displayed)
// alert("False");
// }
// if("car" < "cat"){  //f  //(alert displayed)
// alert("car is smaller than cat");
// // }
// 6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// var obtainedMarks1 = +prompt("Please enter your obtained marks in English out of 100")
// var obtainedMarks2 = +prompt("Please enter your obtained marks in Maths out of 100")
// var obtainedMarks3 = +prompt("Please enter your obtained marks in computers out of 100")
// var obtTotal = (obtainedMarks1) + (obtainedMarks2) + (obtainedMarks3)
// var totalMarks = 300
// var percentage = Math.round(obtTotal / totalMarks *100)
// if (percentage >=80) {
//         document.write("<h1>Marks Sheet</h1><br>Obtained Marks : "+obtTotal+"<br>Total Marks : "+totalMarks
//         +"<br>Percentage : "+percentage+"%"
//         +"<br>Grade : A-one " +"<br> Remarks : Excellent")
// }else if (percentage>=70) {
//         document.write("<h1>Marks Sheet</h1><br>Obtained Marks : "+obtTotal+"<br>Total Marks : "+totalMarks
//         +"<br>Percentage : "+percentage+"%"
//         +"<br>Grade : A " +"<br> Remarks : Good")
// } else if (percentage>=60) {
//         document.write("<h1>Marks Sheet</h1><br>Obtained Marks : "+obtTotal+"<br>Total Marks : "+totalMarks
//         +"<br>Percentage : "+percentage+"%"
//         +"<br>Grade : B" +"<br> Remarks : You need to improve")

// } else if(percentage<=60){
//         document.write("<h1>Marks Sheet</h1><br>Obtained Marks : "+obtTotal+"<br>Total Marks : "+totalMarks
//         +"<br>Percentage : "+percentage+"%"
//         +"<br>Grade : Fail " +"<br> Remarks : Sorry")
// }
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// var secretNumber =7;
// var userInput = +prompt("Guess the Secret Number between 1-10")
// if (userInput===secretNumber) {
//        alert("“Bingo! Correct answer”")
// }else if(userInput===(++secretNumber)){
//         alert("“Close enough to the correct answer”");
// }else if(userInput<secretNumber){
//         alert("Sorry!Better luck next time");      
// }else{
//         alert("Sorry!Please try again");  
// }
// 8. Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.
// var userInput =+prompt("Enter any number of 1-4 digits of your choice that can be divisible by 3")
// if (userInput % 3===0){  //modulous function is used with reminder 0
//         alert("yes it can be divisible by 3")
// }else{
//         alert("it can not be divisible by 3")       
// }
// 9. Write a program that checks whether the given input is an even number or an odd number.
// var evenOdd =+prompt("Please enter a number")
// if (evenOdd % 2===0) {
//         alert("The given number is Even number.")
// } else if(evenOdd % 2 !=0) {
//         alert("The given number is Odd number.")
// }
// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temperature =+prompt("Please enter the temperature")
// if (temperature >40) {
//         alert("“It is too hot outside.”")
// }else if (temperature >30) {
//         alert('“The Weather today is Normal.”')
// }else if (temperature >20) {
//         alert("“Today’s Weather is cool.”")
// }else if (temperature >10) {
//         alert("“OMG! Today’s weather is so Cool.”")
// }else{
//         alert("Stay home Stay safe!")
// }
// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// var firstNum =+prompt("Please enter First number")
// var operation =prompt("Please enter the Operatioin you want to perform! among (+, -, *, /, %)")
// var secondNum =+prompt("Please enter Second number")
// if (operation==="+") {
//       alert("Your answer is "+ (firstNum+secondNum))
// }else if (operation==="-") {
//         alert("Your answer is "+ (firstNum-secondNum))
// }else if (operation==="*") {
//         alert("Your answer is "+ (firstNum*secondNum))
// }else if (operation==="/") {
//         alert("Your answer is "+ (firstNum/secondNum))
// }else if (operation==="%") {
//         alert("Your answer is "+ (firstNum%secondNum))
// }
