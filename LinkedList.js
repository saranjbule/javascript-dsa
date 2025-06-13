class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const createll = (arr) => {
    let head = null;
    let tail = null;

    for (let i = 0; i < arr.length; i++) {
        const n = new Node(arr[i]);

        if (head === null) {
            head = n;
        } else {
            tail.next = n;
        }

        tail = n;
    }

    return head;
};

const printll = (head) => {
    let ll = '';

    while (head) {
        ll += `${head.val} => `;
        head = head.next;
    }

    ll += 'null';

    return ll;
};

const lengthll = (head) => {
    let l = 0;

    while (head) {
        head = head.next;
        l++;
    }

    return l;
};

/**
 * linear search
 */
const searchll = (head, key) => {
    let index = 0;

    while (head) {
        if (head.val === key) return index;

        head = head.next;
        index++;
    }

    return -1;
};

const deletell = (head, index) => {
    if (index === 0) {
        const newHead = head.next;
        head.next = null;

        return newHead;
    }

    let curr = 1;
    let currHead = head;

    while (currHead) {
        if (index === curr) {
            const next = currHead.next;
            currHead.next = next.next;
            break;
        }

        currHead = currHead.next;
        curr++;
    }

    return head;
};

const insertll = (head, index, val) => {
    const n = new Node(val);

    if (index === 0) {
        n.next = head;

        return n; // new head
    }

    let curr = 1;
    let currHead = head;

    while (currHead) {
        currHead = currHead.next;
    }

    return head;
};

console.log(printll(deletell(createll([0, 12, 1]), 2)));
