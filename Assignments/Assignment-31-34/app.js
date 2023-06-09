 //Assignment- 31-34
// 1. Write a program that displays current date and time in your browser.
// var rightNow = new Date()
// document.write(rightNow)
// 2. Write a program that alerts the current month in words. For example December.
// var monthsName =["January","February","March","April","May","June","July","August","September","October","November",
// "December"];
// var today = new Date();
// var monthIndex = today.getMonth()
// var monthCurrent = monthsName[monthIndex]
// document.write("<br><h2>Current Month :</h2><br>"+monthCurrent)
// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then
// alert will show Sun.
// var daysName =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var rightNow = new Date();
// var dayIndex = rightNow.getDay()
// var today = daysName[dayIndex]
// alert("Today is "+today)
// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var daysName =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var rightNow = new Date();
// var dayIndex = rightNow.getDay()
// var today = daysName[dayIndex]
// if (today==="Sunday"|| today==="Saturday") {
//         alert("It's a Fun day!")
// }else{
// alert("The week is still going!")}
// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than
// 16th of the month else shows “Last days of the month”.
// var rightNow = new Date();
// var dateToday = rightNow.getDate()
// if (dateToday < 16) {
//         alert("“First fifteen days of the month”")
// }else{
//         alert("“Last days of the month”")}
// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable
// that hasn't been declared beforehand.Use any variable you like to represent the Date object.
// var today = new Date()
// var calculateTime =+ new Date()  //added +sign to get time which is in millisec (/1000 to get in sec,/1000*60 for min)
// document.write("<br>Current Date: "+today)
// document.write("<br>Elapsed milliseconds since January 1,1970: "+calculateTime)
// document.write("<br>Elapsed seconds since January 1,1970: "+calculateTime/1000)
// document.write("<br>Elapsed minutes since January 1,1970: "+calculateTime/(1000*60))
// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var newDay = new Date()
// var timeToday = newDay.getHours()
// if (timeToday <12) {
//         alert("“Its AM”")
// } else if (timeToday>12) {
//         alert("“Its PM”")
// }
// 8. Write a program that creates a Date object for the last day of the last month of 2023 and assigns
// it to variable named laterDate.
// var laterDate = new Date();
// laterDate.setFullYear(2023)
// laterDate.setMonth(11)
// laterDate.setDate(31)
// document.write(laterDate)
// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on March 23, 2023
// var ramadanStart= new Date('March 23, 2023')
// var currentDate =new Date();
// var numOfDaysPassed = currentDate.getTime()-ramadanStart.getTime()
// var totalDays = Math.round(numOfDaysPassed/(1000*60*60*24))
// document.write(totalDays+" Days passed since Ramadan 2023.")
// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the
// beginning of 2023.
// var todayDate = new Date("January 1 ,2023")
// var referenceDate = new Date()
// var secondsPassed = referenceDate.getTime()-todayDate.getTime()
// document.write("<br>On reference date "+referenceDate+",<br>")
// document.write(Math.round(secondsPassed/1000)+" seconds had passed since the beginning of 2023!")
// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var rightNow = new Date()
// var rightNowHour = rightNow.getHours()
// document.write("Current Time : "+rightNow)
// rightNow.setHours(++rightNowHour)
// document.write("<br>Time hour Ahead : "+rightNow)
// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var currentCentury = new Date();
// alert("Current Time : "+currentCentury)
// currentCentury.setFullYear(currentCentury.getFullYear()-100)
// alert("Time 100 years back : "+currentCentury)
// 13. Write a program to ask the user about his age.Calculate and show his birth year in your browser.
// var userAge =+prompt("Please enter your Bith Year")
// var currentYear = new Date()
// console.log(userAge)
// var userBirthYear =currentYear.getFullYear()-userAge
// alert(userBirthYear)
// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,Net Amount Payable (within Due Date) = Number of units*Charges per unit & Gross Amount Payable
// (after Due Date) = Net Amount + Late Payment Surcharge.
// var customerName =prompt("Please enter your Name")
// var monthsName =["January","February","March","April","May","June","July","August","September","October","November",
// "December"];
// var today = new Date();
// var monthIndex = today.getMonth()
// var monthCurrent = monthsName[monthIndex]
// console.log(monthCurrent)
// var customerUnits = (Math.round(Math.random()*900)+100)//as random nums are in decimals to make it a 3 digit we*900+100
// // to make it 4digit*9000+100
// console.log(customerUnits)
// var perUnit =16
// var amountPayableBeforeDue =customerUnits*perUnit
// console.log(amountPayableBeforeDue)
// var surCharge = 350
// var amountPayableAfterDue =customerUnits*perUnit+surCharge
// console.log(amountPayableAfterDue)
// document.write("<h1>K-Eectrric Bill</h1><br><br>Customer Namer: "+customerName
// +"<br>Month: "+monthCurrent+"<br>Number of units: "
// +customerUnits+"<br>Charges per unit: "+perUnit+
// "<br><br>Net Amount Payable(within Due Date): "+amountPayableBeforeDue
// +"<br>Late payment surcharge: "+surCharge+"<br>Gross Amount Payable(after Due Date): "
// +amountPayableAfterDue)

