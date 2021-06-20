// using recursion

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


// using bottom-up approach

const answer = n => {
    if (n == 1 || n == 2) {
        return 1;
    }
    bottom_up = Array(n + 1);
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i <= n; i++) {
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
    }
    return bottom_up[n];
}
console.log(answer(6));