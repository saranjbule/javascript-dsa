/**
 * Fixed size stack using Array
 */
class STACK {
    constructor(size) {
        this.stack = Array(size);
        this.top = -1;
    }

    push(val) {
        if (this.top === this.stack.length - 1) {
            console.log('STACK IS FULL');
            return;
        }

        this.top++;
        this.stack[this.top] = val;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('STACK IS EMPTY');
            return;
        }

        const val = this.stack[this.top];
        this.top--;

        return val;
    }

    getTop() {
        if (this.isEmpty()) {
            console.log('STACK IS EMPTY');
            return;
        }

        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    getSize() {
        return this.top + 1;
    }
}

/**
 * Dynamic stack using Array
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

        if (this.stack) {
            n.next = this.stack;
        }

        this.stack = n;
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

const s = new STACK(10);
console.log(s.getSize());
console.log(s.isEmpty());
console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));

console.log(s.getSize());
console.log(s.getTop());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.getTop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
