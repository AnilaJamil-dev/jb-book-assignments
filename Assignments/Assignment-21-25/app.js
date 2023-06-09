                        //Assignment- 21-25
//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a 
// new variable titled fullName. Greet the user using his full name.
// var firstName =prompt("Please enter your first name.")
// var lastName =prompt("Please enter your last name.")
// var fullName = firstName +" "+lastName
// alert("Hello! "+fullName)

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user 
// input in your browser
// var favPhone= prompt("Please enter the name of your favourite phone model")
// var inputLength= favPhone.length
// document.write("My favourite phone model is: "+favPhone+"<br>Length of string: "+inputLength)

//3. Write a program to find the index of letter “n” in the word“Pakistani” and display the result in your browser
// var pk= "Pakistan"
// var index= pk.indexOf("n")
// document.write("<h1>String: "+pk+"<br>Index of 'n': "+index)

//4.Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var greeting= "Hello World"
// var index= greeting.lastIndexOf("l")
// document.write("<h1>String: "+greeting+"<br>Index of 'l': "+index)

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var pk= "Pakistani"
// var character= pk.charAt(3)
// document.write("<h1>String: "+pk+"<br>Character at index '3': "+character)

//6. Repeat Q1 using string concat() method.
// var firstName =prompt("Please enter your first name.")
// var lastName =prompt("Please enter your last name.")
// var fullName = firstName.concat(" ", lastName)
// alert("Hello! "+fullName)

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var city ="Hyderabad"
// var newCity = city.replace("Hyder","Islam")
// document.write("City: "+city+"<br>After Replacement: "+newCity)

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your
//browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var newMessage= message.replace(/and/g,"&")   //global replace use //g as syntax instead of ""
// document.write("Message: "+message+"<br>After Replacement: "+newMessage)

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
// var myStr ="472"
// var myNum =Number(myStr)
// document.write("Value: "+myStr+"<br>Type: String <br>Value: "+myNum+"<br>Type:Number ")

//10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput=prompt("Please enter your name.");
// var allCaps = userInput.toUpperCase();
// document.write("<h1>lower case input: "+userInput+"<br>Upper case display: "+allCaps)

//11. Write a program that takes user input. Convert and show the input in title case.
// var userInput=prompt("Please enter your name.");
// var lowerCase = userInput.toLowerCase().slice(1);  //slice 1 to not repeat the same letter 
// var titleCase = userInput[0].toUpperCase();
// document.write("<h1>lower case input: "+userInput+"<br>Title case display: "+titleCase+lowerCase)

//12. Write a program that converts the variable num to string.var num = 35.36 ;
//Remove the dot to display “3536” display in your browser
// var myNum = 35.36 ;
// var myStr =myNum.toString()
// var noDot =myStr.replace(".","")
// document.write("Number: "+myStr+"<br>Result: "+noDot)

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var userName =prompt("Please enter your name.")
// var checkInput= userName.charCodeAt(0)
// if (userName=33,44,46,64){
//         alert("Please enter a valid name")
//       }
// else{
//         alert("Hello! "+userName)
// }                                            //it's wrong I can't find the solution

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given 
// item is found in the list or not.Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
// var userSearch =prompt("What do you want to order?");
// userSearch=userSearch.toLowerCase();
// var bakedItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for (var i = 0; i <= 4; i++) {
// if (userSearch === bakedItems[i]) {
//         userSearch=true
//         alert("yes it is available")
// }else {
//         userSearch=false
//         alert("sorry! it is not available in our bakery")    //can't understand the error 
// }}

//15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table.
// 65-90 cap letters,97-122 small letters, 48-57 0-9 numbers
// var password= prompt("Please enter your password")
// if (password.length<=6 && password.includes(/65-90/g)
// && password.includes(/97-122/g)&& password.includes(/48-57/g)) {
        
//         document.write("Password: "+password)
// } else {
//         document.write("Sorry! please enter a valid password")        //it is wrong
// }

//16. Write a program to convert the following string to an array using string split method.
// Display the elements of array in your browser.
// var university = "University of Karachi";
// var arrToStr = university.split("")  // no space b/w the "" for letters
// document.write(arrToStr)

// 17. Write a program to display the last character of a user input.

// var userInput= prompt("Please enter your input")
// var lastIndex = userInput.lastIndexOf()
// console.log(lastIndex)
// var lastCharacter = userInput.charAt(userInput.length+lastIndex) 
// document.write(lastCharacter)

//18. You have a string “The quick brown fox jumps over the 
//lazy dog”. Write a program to count number of occurrences of word “the” in given string

// var myStr="The quick brown fox jumps over the lazy dog"
// var myStr= myStr.toLowerCase().split(" ")  //add space for words b/w " " added toLowerCase for correct counting
// console.log(myStr)                              
// var myWord = "the"
// var occurrences =''
// for(i=0; i< myStr.length; i++){
//         if (myStr[i]===myWord) {
//                 occurrences++;      //increament on each loop
//         }
// }
// document.write("The total occurrences of the is: "+occurrences)

