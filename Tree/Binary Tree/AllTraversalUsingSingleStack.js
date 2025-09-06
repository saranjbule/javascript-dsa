class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);

n1.left = n2;
n1.right = n5;
n2.left = n3;
n2.right = n4;
n5.left = n6;
n5.right = n7;

const stack = [[n1, 1]];

const preOrder = [];
const inOrder = [];
const postOrder = [];

while (stack.length) {
    const [top, lvl] = stack.pop();

    if (lvl === 1) {
        preOrder.push(top.val);

        stack.push([top, 2]);

        if (top.left) {
            stack.push([top.left, 1]);
        }
    } else if (lvl === 2) {
        inOrder.push(top.val);

        stack.push([top, 3]);

        if (top.right) {
            stack.push([top.right, 1]);
        }
    } else {
        postOrder.push(top.val);
    }
}

console.log(preOrder);
console.log(inOrder);
console.log(postOrder);