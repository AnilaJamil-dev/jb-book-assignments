//Assignment- 17-20
//1. Declare and initialize an empty multidimensional array.(Array of arrays)
// var multiArr =[[],[]]
// multiArr[0].push(1)
// multiArr[0,1].push(2)
// multiArr[1].push("a")
// multiArr[1,1].push("b")
// document.write(multiArr+"<br>")

// 2. Declare and initialize a multidimensional array representing the following matrix:
// var multiArr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(multiArr[0]+"<br>")
// document.write(multiArr[1]+"<br>")
// document.write(multiArr[2]+"<br>")

//3. Write a program to print numeric counting from 1 to 10
// for (var i=1; i<=10; i++) {document.write("<h1>"+i+"<br>")}

//4. Write a program to print multiplication table of any number using for loop.Table number & length should be 
//taken as an input from user.
// var numTable=+prompt("Enter a number for table")
// var numTimes=+prompt("Enter a number for times")
// for (var i=1; i<=numTimes; i++){
//         var table =numTable*i
//         document.write(numTable+" x "+i+" = "+ table+"<br>")
// }

//5. Write a program to print items of the following array using for loop:
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i = 0; i <= fruits.length; i++) {document.write(fruits[i]+"<br>")}
// document.write("<br>Element at index 0 is: "+fruits[0]+"<br>Element at index 1 is: "+fruits[1]
// +"<br>Element at index 2 is: "+fruits[2]+"<br>Element at index 3 is: "+fruits[3]
// +"<br>Element at index 4 is: "+fruits[4]+"<br>")

// 6. Generate the following series in your browser. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var reverseCounting=[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// var even =[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// var odd =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// var series =['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k']
// document.write("<h1>Countng: </h1><br>"+counting+"<br><h1>Reverse counting: </h1><br>"+reverseCounting
// +"<br><h1>Even: </h1><br>"+even+"<br><h1>Odd: </h1><br>"+odd+"<br><h1>Series: </h1><br>"+series)

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

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

//8. Write a program to identify the largest number in the given array.
// var A = [24, 53, 78, 91, 12]
// var largestNum =Math.max(24, 53, 78, 91, 12)
// document.write("Array: "+A+"<br>The largest Number in array is: "+largestNum)

//9. Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12]
// var samallestNum =Math.min(24, 53, 78, 91, 12)
// document.write("Array: "+A+"<br>The smallest Number in array is: "+samallestNum)

//10. Write a program to print multiples of 5 ranging 1 to 100.
// for(var i=1; i<=100; i++){
//         if(i%5===0)                   //modules/reminder is used here
//         document.write(i+" ")
// }

