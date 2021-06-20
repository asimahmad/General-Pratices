let arr = ["Asim", "Ankit", "Aakash"];
let obj = {
    name: "Asim",
    city: "Delhi",
    getInfo: function() {
        console.log(this.name + " from ", this.city);
    }
}

console.log(arr.__proto__.__proto__);
let obj2 = {
    name: "Akshat"
}


// Never do this.
obj2.__proto__ = obj;
console.log(obj2.getInfo())


Function.prototype.mybind = function() {
    console.log("From my bind method");
}

function fun() {

}
// mybind will be accessed by all functions.
console.log(fun.__proto__.mybind())