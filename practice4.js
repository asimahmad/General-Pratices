console.log('Stack implementation using linkedlist');

class NewNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {

    constructor(length) {
        this.length = length;
    }
    push(value) {
        this.newNode = new NewNode(value)

        if (this.length === 0) {
            this.head = this.newNode;
            this.tail = this.head
        } else {
            this.tail.next = this.newNode;
            this.tail = this.newNode
        }
        this.length++

            return this;
    }

    printStack() {
        if (this.length === 0) {
            return null;
        }
        this.currentNode = this.head;
        while (this.currentNode.next) {
            console.log(this.currentNode.value);
            this.currentNode = this.currentNode.next;
        }
        console.log(this.currentNode.value);
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        this.currentNode = this.head
        while (this.currentNode.next) {
            this.prevNode = this.currentNode;
            this.currentNode = this.currentNode.next;
        }
        this.prevNode.next = null;
        this.tail = this.prevNode;
        this.length--;
        return this;
    }
}

const obj1 = new Stack(0);
obj1.push(2);
obj1.push(23);
obj1.push(3);
obj1.pop();
obj1.pop();
obj1.printStack();