//Assignment-13-15
// 1. Declare an empty array using JS literal notation to store student names in future.
//  var stuudentNames =[];
// console.log(stuudentNames[0]="Ali")
// console.log(stuudentNames[1]="Ashar")
// 2. Declare an empty array using JS object notation to store student names in future.
//  var stuudentNames =[];
// console.log(stuudentNames[0]="Ali")
// console.log(stuudentNames[3]="Ashar")
// console.log(stuudentNames[6]="Saba")
// 3. Declare and initialize a strings array.
// var series = ["You","Wednesday","Ginny and Georgia"]
// console.log(series)
// 4. Declare and initialize a numbers array.
// var numbers  =[1,2,3,4,5]
// console.log(numbers)
// 5. Declare and initialize a boolean array.
// var booleanArray= Boolean(10>9)
// console.log(booleanArray)
// var booleanArray2 = Boolean(9>10)
// console.log(booleanArray2)
// var booleanArray3 = Boolean(0)
// console.log(booleanArray3)
// var booleanArray4 = Boolean(-10)
// console.log(booleanArray4)
// var booleanArray5 = Boolean("password12345")
// console.log(booleanArray5)
// 6. Declare and initialize a mixed array.
// var mixedArray =["password",123]
// console.log(mixedArray)
// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).Show the listed qualifications in your browser like:
// var qualificationsPk = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
// document.write("<h1>Qualifications</h1><br>1) "+qualificationsPk[0]+"<br>2) "
// +qualificationsPk[1]+"<br>3) "+qualificationsPk[2]+"<br>4) "+qualificationsPk[3]
// +"<br>5) "+qualificationsPk[4]+"<br>6) "+qualificationsPk[5]
// +"<br>7) "+qualificationsPk[6]+"<br>8) "+qualificationsPk[7])
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var stdNames =["Micheal","John","Tony"]
// var stdScore =[320,230,480]
// var stdpercentage0=stdScore[0]/500*100
// var stdpercentage1=stdScore[1]/500*100
// var stdpercentage2=stdScore[2]/500*100
// document.write("<br>Score of "+stdNames[0]+" is "+stdScore[0] +" and percentage is "+stdpercentage0+"%."
// +"<br>Score of "+stdNames[1]+" is "+stdScore[1] +" and percentage is "+stdpercentage1+"%."
// +"<br>Score of "+stdNames[2]+" is "+stdScore[2] +" and percentage is "+stdpercentage2+"%.")

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
// position/index.Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// Thenremove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
// var colorNames =[" yellow ","pink ","red "] 
// document.write("<br>Orignal array is :"+colorNames)

// var userAddbegining =prompt("Which color Do you want to add at the Begining?")  //a
// colorNames.unshift(userAddbegining)
// document.write("<br>After adding your desire color at the begining :"+colorNames)

// var userAddend =prompt("Which color Do you want to add at the End?")  //b
// colorNames.push(userAddend)
// document.write("<br>After adding your desire color at the End :"+colorNames)

// colorNames.unshift(" voilet "," beige ")  //c
// document.write("<br>After adding Two more colors at the Begining :"+colorNames)

// colorNames.shift(0)  //d
// document.write("<br>After removing One color from the Begining :"+colorNames)

// colorNames.pop()  //e
// document.write("<br>After removing One color from the End :"+colorNames)

// var colorIndex =+prompt("On which Number index Do you want to add a new color?")  //f
// var newColor =prompt("Write the name of the color you want to be added!")  
// colorNames.splice(colorIndex ,0, newColor)
// document.write("<br>After adding your desire color at your desired index :"+colorNames)

// var colorIndexDelete =+prompt("On which Number index Do you want to delete the color/colors?")  //g
// var deleteColor =+prompt("Write the number of the color/colors you want to be deleted!")  
// colorNames.splice(colorIndexDelete , deleteColor)
// document.write("<br>After Deleting the color/s from your desired index :"+colorNames)
// 10.Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var stdScores= [320,230,480,120]
// document.write("<br>Score of Students : "+stdScores)
// stdScores.sort()
// document.write("<br>Ordered Scores of Students : "+stdScores)
// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to 
// selectedCities array.
// var cityNames =["city1","city2","city3","city4","city5"]
// document.write("<br>Cities Names <br>"+cityNames)
// var selectedCities =cityNames.slice(0,3)
// document.write("<br><br>Selected cities Names <br>"+selectedCities)
// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
// var arr = ["This ","is ","my ","cat."]
// document.write("<h1>Array:</h1><br>"+arr)
// var jointArr =arr.join("")
// document.write("<h1>String:</h1><br>"+jointArr)
// 13. Create a new array. Store values one by one in such a way that you can access the values in the 
// order in which they were stored. (FIFO-First In First Out)
// var arr =[]
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("moniter")
// document.write("Devices:<br>"+arr)
// var out1=arr.shift()
// var out2=arr.shift()
// var out3=arr.shift()
// var out4=arr.shift()
// document.write("<br>Out:<br>"+out1)
// document.write("<br>Out:<br>"+out2)
// document.write("<br>Out:<br>"+out3)
// document.write("<br>Out:<br>"+out4)
// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order.
// (Last In-First Out)
// var arr =[]
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("moniter")
// document.write("Devices:<br>"+arr)
// var out1=arr.pop()
// var out2=arr.pop()
// var out3=arr.pop()
// var out4=arr.pop()
// document.write("<br>Out:<br>"+out1)
// document.write("<br>Out:<br>"+out2)
// document.write("<br>Out:<br>"+out3)
// document.write("<br>Out:<br>"+out4)
// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:
// var phones = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' ,'Haier']
// var out1=phones.shift()
// var out2=phones.shift()
// var out3=phones.shift()
// var out4=phones.shift()
// var out5=phones.shift()
// var out6=phones.shift()
// document.write("<br>"+out1)
// document.write("<br>"+out2)
// document.write("<br>"+out3)
// document.write("<br>"+out4)
// document.write("<br>"+out5)
// document.write("<br>"+out6)
