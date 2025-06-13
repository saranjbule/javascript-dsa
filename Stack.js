/**
 * Stack using Array
 */

class Stack_Array {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            throw 'EMPTY STACK';
        }

        return this.stack.pop();
    }

    top() {
        if (this.isEmpty()) {
            throw 'EMPTY STACK';
        }

        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

/**
 * Stack using Linkedlist
 */

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class STACK_LINKEDLIST {
    constructor() {
        this.stack = null;
        this.sizeCount = 0;
    }

    push(item) {
        const n = new Node(item);

        if (this.stack === null) {
            this.stack = n;
        } else {
            n.next = this.stack;
            this.stack = n;
        }

        this.sizeCount += 1;
    }

    pop() {
        if (this.isEmpty()) {
            throw 'EMPTY STACK';
        }

        const next = this.stack.next;
        const val = this.stack.val;

        // this.stack.next = null; // not needed in javascript
        // as even the link is intact but there is no way to access the node
        // so automatically garbage collected by gc

        this.stack = next;

        this.sizeCount -= 1;

        return val;
    }

    top() {
        if (this.isEmpty()) {
            throw 'EMPTY STACK';
        }

        return this.stack.val;
    }

    isEmpty() {
        return this.sizeCount === 0;
    }

    size() {
        return this.sizeCount;
    }
}

const s = new STACK_LINKEDLIST();
console.log(s.size());
console.log(s.isEmpty());
console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));

console.log(s.size());
console.log(s.top());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.top());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
