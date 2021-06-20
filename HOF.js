// // function x() {
// //     console.log("Hey there")
// // }

// // function y(x) {
// //     x();
// // }

// // y();


// const radius = [3, 2, 1, 4];

// const Area = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(Area(radius))

// const Circumference = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(Circumference(radius))

// const Diameter = radius => {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output
// }

// console.log(Diameter(radius))


// here the issue is repleating the most of the code again and again



// Now using Higher Order function
// advantages: reusibility, modularity and etc.

const radius = [3, 2, 1, 4];

const area = radius => {
    return Math.PI * radius * radius;
}

const circumference = radius => {
    return 2 * Math.PI * radius;
}

const diameter = radius => {
    return 2 * radius;
}

const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

Array.prototype.calculateLikeMap = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output;
}


console.log(radius.map(area))

console.log("Using function as Map function: ", radius.calculateLikeMap(area))

//console.log(calculate(radius, area))
//console.log(calculate(radius, circumference))
//console.log(calculate(radius, diameter))