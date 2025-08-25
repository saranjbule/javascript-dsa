class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const n10 = new Node(10);
const n5 = new Node(5);
const n13 = new Node(13);
const n3 = new Node(3);
const n6 = new Node(6);
const n11 = new Node(11);
const n14 = new Node(14);
const n2 = new Node(2);
const n4 = new Node(4);
const n9 = new Node(9);

n10.left = n5;
n10.right = n13;
n5.left = n3;
n5.right = n6;
n3.left = n2;
n3.right = n4;
n6.right = n9;
n13.left = n11;
n13.right = n14;

class BST {
    getMinIterative(root) {
        let min = null;

        while (root) {
            min = root.val;
            if (root.left) {
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return min;
    }

    getMinRecursive(root, min = null) {
        if (!root) return min;

        if (root.left) {
            return this.getMinRecursive(root.left, root.val);
        } else {
            return this.getMaxRecursive(root.right, root.val);
        }
    }

    getMaxIterative(root) {
        let max = null;

        while (root) {
            max = root.val;
            if (root.right) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        return max;
    }

    getMaxRecursive(root, max = null) {
        if (!root) return max;

        if (root.right) {
            return this.getMaxRecursive(root.right, root.val);
        } else {
            return this.getMinRecursive(root.left, root.val);
        }
    }
}

const bst = new BST();
