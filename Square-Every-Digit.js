// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    var digits = (""+num).split("");
    var arr = []
    
    for (let i = 0; i < digits.length; i++) {
      arr.push(Math.pow(digits[i], 2))
    }
    return parseInt(arr.toString().replace(/,/g, ""))
  }