const fnth = 6;

let memo = Array(fnth + 1).fill(null)
    // console.log(memo);
const inTime = new Date().getTime();

function fib(n, memo) {
    if (memo[n] != null) {
        return memo[n];
    }
    if (n == 1 || n == 2) {
        result = 1;
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo);
    }
    memo[n] = result;
    return result;
}
const outTime = new Date().getTime();
console.log(inTime, outTime)
console.log("Time taken: ", outTime - inTime, " milliseconds");
console.log(fib(fnth, memo))