//1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.

function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}


console.log(max(4, 8));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxOfThree(21, 3, 9))

//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char1) {
    if (char1 === 'a' || char1 === 'e' || char1 === 'i' || char1 === 'o' || char1 === 'u') {
        return true
    } else return false
}

console.log(isVowel('e'));

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
// input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

// For sum
var sum = 0;
var arr1 = [1, 5, 6, 2]
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log("The sum of an array is:" + sum)

// For multiplication 
var multiply = 1;
for (let i = 0; i < arr1.length; i++) {
    multiply *= arr1[i];
}
console.log("The multiplication of an array is:" + multiply)

// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj"


function reverse(str) {
    let returnString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    return returnString
}
console.log(" "+reverse("jag testar"))


