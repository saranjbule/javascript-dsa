/**
 * Static queue using Array
 */
class QUEUE {
    constructor(size) {
        this.queue = Array(size);
        this.front = -1;
        this.rear = -1;
        this.currSize = 0;
    }

    isEmpty() {
        return this.currSize === 0;
    }

    getFront() {
        if (this.isEmpty()) {
            console.log('QUEUE IS EMPTY');
            return;
        }

        return this.queue[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            console.log('QUEUE IS EMPTY');
            return;
        }

        return this.queue[this.rear];
    }

    size() {
        return this.currSize;
    }

    enqueue(val) {
        if (this.currSize === this.queue.length) {
            console.log('QUEUE IS FULL');
            return;
        }

        this.currSize++;

        if (this.isEmpty()) {
            this.front++;
        }

        this.rear++;

        if (this.rear >= this.queue.length) {
            this.rear %= this.queue.length;
        }

        this.queue[this.rear] = val;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('QUEUE IS EMPTY');
            return;
        }

        const val = this.queue[this.front];
        this.currSize--;

        if (this.currSize === 0) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;

            if (this.front >= this.queue.length) {
                this.front %= this.queue.length;
            }
        }

        return val;
    }
}

/**
 * Dynamic queue using Array
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

const q = new QUEUE(3);
console.log(q.size());
console.log(q.isEmpty());
console.log(q.enqueue(10));
console.log(q.enqueue(20));
console.log(q.getFront());
console.log(q.getRear());
console.log(q.dequeue());
console.log(q.enqueue(30));
console.log(q.getFront());
console.log(q.getRear());
console.log(q.size());
console.log(q.enqueue(40));
console.log(q.getFront());
console.log(q.getRear());
console.log(q.isEmpty());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
