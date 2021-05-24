class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        this.newNode = {
            value: value,
            next: null
        }
        this.tail.next = this.newNode
        this.tail = this.newNode
        this.length++;
        return this
    }

    prepand(value) {
        this.newNode = new Node(value)
        this.newNode.next = this.head
        this.head = this.newNode
        this.length++;
        return this
    }

    printList() {
        let a = []
        let currentNode = this.head;
        while (this.length) {
            a.push(currentNode.value);
            currentNode = currentNode.next;
            this.length--
        }
        return a;
    }
}


const obj1 = new LinkedList(2);
obj1.append(3);
obj1.prepand(4);
console.log(obj1.printList())