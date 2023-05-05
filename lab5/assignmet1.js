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
function sum(arr) {
    let result = 0;
    for (let num of arr) {
        result += num;
    }
    return result;
}
console.log("The sum of an array is: " + sum([1, 4, 5, 6]))

// For multiplication 
function multiply(arr) {
    let result = 1;
    for (let num of arr) {
        result *= num;
    }
    return result;
}
console.log("The multiplication of an array is:" + multiply([1, 4, 5, 6]))

// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj"


function reverse(str) {
    let returnString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        returnString += str[i]
    }
    return returnString
}
console.log(" " + reverse("jag testar"))

//6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

// var arr1 = ["Hello", "how", "are", "you" ,"doing"]

function findLongestWord(wordArray) {
    let longestLength = 0;
    for (let word of wordArray) {
        if (word.length > longestLength) {
            longestLength = word.length
        }
    }
    return longestLength
}
console.log("Longest length is " + findLongestWord(["Hello", "how", "are", "you", "doing"]))

// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.

function filterLongWords(arr, i) {
    var arrs = arr.filter(word => word.length > i)
    return arrs;
}

console.log(filterLongWords(["Hello", "how", "are", "you", "doing"], 3))

//8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num * num
    }
    return sum

}

console.log(computeSumOfSquares([1, 2, 3, 4]))

// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
// and prints only the numbers which are odd.

function printOddNumbersOnly(numbers) {
    for (let number of numbers) {
        if (number % 2 != 0) {
            console.log(number)
        }
    }
}
printOddNumbersOnly([32, 33, 24, 53, 59, 24, 74])


// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.


function computeSumOfSquaresOfEvensOnly(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 == 0) {
            sum += number * number
        }
    }
    return sum
}
console.log("computeSumOfSquaresOfEvensOnly is " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]))

// 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
//     above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
//     functional programming style/approach. 


// For sum
function sumUsingReduce(arr) {
    return arr.reduce(function (sum, num) {
        return sum + num;
    }, 0);
}
console.log("The sum of an array using reduce is: " + sumUsingReduce([1, 4, 5, 6]))

// For multiplication 
function multiplyUsingReduce(arr) {
   return  arr.reduce(function (multiply, number) {
        return multiply * number
    }, 1)
}
console.log("The multiplication of an array using reduce is:" + multiplyUsingReduce([1, 4, 5, 6]))

// 12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).


function printFibo(n, a, b) {
    let fib = [a, b];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.join(", "));
  }

  printFibo(10,0,1)





