console.log("Binary Heap")

class NewNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BHeap {
    constructor() {
        this.root = null;
    }

    add(value) {
        this.newNode = new NewNode(value)
        if (!this.root) {
            this.root = this.newNode
            return this;
        }
        this.currentNode = this.root
        while (this.currentNode) {
            if (this.newNode.value < this.currentNode.value) {
                if (!this.currentNode.left) {
                    this.currentNode.left = this.newNode
                }
                this.currentNode = this.currentNode.left
            }
        }
    }
}

const heap = new BHeap();
console.log(heap.add(2))