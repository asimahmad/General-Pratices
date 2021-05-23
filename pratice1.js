const A = function A(x) {
    x++
    (x = x - 3) && ++x
    return x--
}

console.log(A(2));