console.log("Queue with linkedlist")
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        this.newNode = new Node(value);
        if (!this.last) {
            this.first = this.last = this.newNode;
            this.length++;
            return this;
        }
        this.last.next = this.newNode
        this.last = this.newNode
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        this.first = this.first.next;
        if (!this.first) {
            this.last = null
        }
        this.length--;
        return this;
    }
    printQueue() {
        let a = [];
        if (!this.last) {
            return null;
        }
        this.currentNode = this.first;
        while (this.currentNode) {
            a.push(this.currentNode.value);
            this.currentNode = this.currentNode.next
        }
        console.log(a);
    }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.dequeue()
queue.dequeue()
queue.enqueue(3)
queue.dequeue()
queue.enqueue(23);
queue.enqueue(3);
queue.enqueue(223);
queue.enqueue(2334);
queue.printQueue()
queue.dequeue()
queue.printQueue()