console.log("This is for tree")

class NewNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BTree {
    constructor() {
        this.root = null;
        this.nodes = 0;
    }

    add(value) {
        this.newNode = new NewNode(value);
        if (this.root === null) {
            this.root = this.newNode;
            this.nodes++
                return this
        } else {
            this.currentNode = this.root
            while (this.currentNode) {
                if (this.currentNode.value === this.newNode.value) {
                    return undefined
                }
                if (this.newNode.value < this.currentNode.value) {
                    if (this.currentNode.left === null) {
                        this.currentNode.left = this.newNode
                        this.nodes++
                            return this
                    }
                    this.currentNode = this.currentNode.left
                } else {
                    if (this.currentNode.right === null) {
                        this.currentNode.right = this.newNode
                        this.nodes++
                            return this
                    }
                    this.currentNode = this.currentNode.right
                }
            }
        }
    }

    lookUp(value) {
        if (!this.root) {
            return false;
        } else {
            this.currentNode = this.root
            while (this.currentNode) {
                if (value === this.currentNode.value) {
                    return this.currentNode;
                }
                if (value < this.currentNode.value) {
                    this.currentNode = this.currentNode.left;
                } else {
                    this.currentNode = this.currentNode.right
                }
            }
            return false;
        }
    }


    remove(value) {

    }

    getRoot() {
        return this.root
    }

    inOrder(node) {
        if (this.node !== null) {
            this.inOrder(this.node.left)
            console.log(this.node.value)
            this.inOrder(this.node.right)
        }
    }

    preOrder(node) {
        console.log(this.node.value)
        this.preOrder(this.node.left)
        this.preOrder(this.node.right)
    }

    postOrder(node) {
        this.postOrder(this.node.left)
        this.postOrder(this.node.right)
        console.log(this.node.value)
    }

}

const tree = new BTree();
tree.add(2)
tree.add(3)
tree.add(0)
console.log(tree.add(1))
console.log(tree.lookUp(20));
//console.log(tree.lookUp(5));
//  const root = tree.getRoot();
//  tree.inOrder(root);



// class Node {
//     constructor(value) {
//         this.value = value;
//         this.right = null;
//         this.left = null;
//     }
// }
// class Tree {
//     constructor() {
//         this.root = null;
//         this.count = 0;
//     }

//     insert(value) {
//         this.newNode = new Node(value);
//         if (!this.root) {
//             this.root = this.newNode
//         } else {
//             this.currentNode = this.root;
//             while (this.currentNode) {
//                 if (this.newNode.value < this.currentNode.value) {
//                     if (this.currentNode.left === null) {
//                         this.currentNode.left = this.newNode
//                     }
//                     this.currentNode = this.currentNode.left;
//                 } else {
//                     if (this.currentNode.right === null) {
//                         this.currentNode.right = this.newNode
//                     }
//                     this.currentNode = this.currentNode.right
//                 }
//             }
//         }
//         this.count++;
//         return this;
//     }
// }
// const tree = new Tree();
// tree.insert(2);
// tree.insert(1);
// tree.insert(4);
// console.log(tree.insert(3))