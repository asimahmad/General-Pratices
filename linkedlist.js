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

    findNthNode(node) {
        this.count = 0;
        this.currentNode = this.head;
        while (this.currentNode != null) {
            if (this.count + 1 === node) {
                return this.currentNode.value;
            }
            this.count++;
            this.currentNode = this.currentNode.next;
        }
    }

    addPreNthNode(value, n) {
        this.newNode = {
            value: value,
            next: null
        }
        this.count = 0;
        this.currentNode = this.head;
        this.temp = this.currentNode;
        while (this.count + 1 != n) {
            this.temp = this.currentNode;
            this.currentNode = this.currentNode.next;
            this.count++;
        }
        this.temp.next = this.newNode;
        this.newNode.next = this.currentNode
        this.length++
    }
}


const obj1 = new LinkedList(2);
obj1.append(3);
obj1.prepand(4);
obj1.append(6);
obj1.addPreNthNode(10, 2);
obj1.addPreNthNode(15, 5);
console.log(obj1.printList());