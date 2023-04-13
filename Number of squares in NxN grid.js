/* Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

Examples
number_squares(2) ➞ 5

number_squares(4) ➞ 30

number_squares(5) ➞ 55
Explanation
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

Notes
Input is a positive integer.
Square pyramidal number */

const numberOfSquares = (n) => {
    let squares = 0;
    if(n < 0){
        return "Enter Positive Number"
    }else {
    for(let i = 0; i <= n; i++){
        squares += Math.pow(i, 2)
    }
}
   return squares
}

numberOfSquares()