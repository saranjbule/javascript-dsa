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

const topView = (root) => {
    let stack = [[root, 0]];
    const res = {};

    while (stack.length) {
        const s = [];

        for (let i = 0; i < stack.length; i++) {
            const [node, vert] = stack[i];

            if (res[vert] === undefined) {
                res[vert] = node.val;
            }

            if (node.left) {
                s.push([node.left, vert - 1]);
            }

            if (node.right) {
                s.push([node.right, vert + 1]);
            }
        }

        stack = s;
    }

    const sortBasedInVerticalLine = Object.entries(res).sort(
        (a, b) => parseInt(a[0]) - parseInt(b[0])
    );

    return sortBasedInVerticalLine.map((a) => a[1]);
};

console.log(topView(n1));

const bottomView = (root) => {
    let stack = [[root, 0]];
    const res = {};

    while (stack.length) {
        const s = [];

        for (let i = 0; i < stack.length; i++) {
            const [node, vert] = stack[i];

            res[vert] = node.val;

            if (node.left) {
                s.push([node.left, vert - 1]);
            }

            if (node.right) {
                s.push([node.right, vert + 1]);
            }
        }

        stack = s;
    }

    const sortBasedInVerticalLine = Object.entries(res).sort(
        (a, b) => parseInt(a[0]) - parseInt(b[0])
    );

    return sortBasedInVerticalLine.map((a) => a[1]);
};

console.log(bottomView(n1));
