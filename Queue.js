/**
 * Queue using Array
 */

class Queue_Array {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        return this.queue.shift(); // O(n)
    }

    front() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        return this.queue[0];
    }

    rear() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        return this.queue[this.queue.length - 1];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

/**
 * Queue using Linkedlist
 */

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class QUEUE_LINKEDLIST {
    constructor() {
        this.frontQ = null;
        this.rearQ = null;
        this.sizeCount = 0;
    }

    enqueue(item) {
        const n = new Node(item);

        if (this.frontQ === null && this.rearQ === null) {
            this.frontQ = n;
            this.rearQ = n;
        } else {
            this.rearQ.next = n;
            this.rearQ = n;
        }

        this.sizeCount += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        const val = this.frontQ.val;

        // not needed as no reference to access the linked node so automatically gc

        // if (this.frontQ === this.rearQ) {
        //   this.frontQ = null;
        //   this.rearQ = null;
        // } else {
        //   const front = this.frontQ.next;

        //   this.frontQ.next = null;
        //   this.frontQ = front;
        // }

        this.frontQ = this.frontQ.next;

        if (this.frontQ === null) {
            this.rearQ = null;
        }

        this.sizeCount -= 1;

        return val;
    }

    front() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        return this.frontQ.val;
    }

    rear() {
        if (this.isEmpty()) {
            throw 'EMPTY QUEUE';
        }

        return this.rearQ.val;
    }

    size() {
        return this.sizeCount;
    }

    isEmpty() {
        return this.sizeCount === 0;
    }
}

const q = new QUEUE_LINKEDLIST();
console.log(q.size());
console.log(q.isEmpty());
console.log(q.enqueue(10));
console.log(q.enqueue(20));
console.log(q.front());
console.log(q.rear());
console.log(q.enqueue(30));
console.log(q.front());
console.log(q.rear());
console.log(q.size());
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
