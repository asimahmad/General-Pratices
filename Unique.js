// const arr = [1, 1, 1,2,3,2,3,4, 1, 1, 1, 1];
// const removeDupes = (arr) => {
//     let result = [];
//     let previous = arr[0];
//     result[0] = previous;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != previous) {
//             result.push(arr[i]);
//         }
//         previous = arr[i];
//     }
//     return result;
// }

// console.log(removeDupes(arr));


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        this.newNode = new Node(value);
        if (this.head === null) {
            this.head = this.newNode;
            this.tail = this.newNode;
        } else {
            this.currentNode = this.head;
            while (this.currentNode.next) {
                this.currentNode = this.currentNode.next;
            }
            this.currentNode.next = this.newNode;
            this.tail = this.newNode;
        }

        this.length++;
        return this;
    }
}

const list = new List();
list.append(2);
list.append(3);
console.log(list.append(4));