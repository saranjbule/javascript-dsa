class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedlist {
    create = (arr) => {
        let head = null;
        let tail = null;

        for (let i = 0; i < arr.length; i++) {
            const newNode = new Node(arr[i]);

            if (head === null) {
                head = newNode;
            } else {
                newNode.prev = tail;
                tail.next = newNode;
            }

            tail = newNode;
        }

        return head;
    };

    print = (head) => {
        let list = 'null <-> ';

        while (head) {
            list += `${head.val} <-> `;

            head = head.next;
        }

        list += 'null';

        return list;
    };

    delete = (head, index) => {
        if (head && index === 0) {
            const next = head.next;
            head.next = null;
            next.prev = null;

            return next; // new head
        }

        let curr = 1;
        let currHead = head;

        while (currHead && currHead.next) {
            const next = currHead.next;

            if (curr === index) {
                const nextToNext = next.next;

                next.prev = null;
                next.next = null;

                currHead.next = nextToNext;
                if (nextToNext) nextToNext.prev = currHead;
            }

            currHead = next;
            curr++;
        }

        return head;
    };

    insert = (head, index, val) => {
        const newNode = new Node(val);

        if (head && index === 0) {
            newNode.next = head;
            head.prev = newNode;

            return newNode; // as new head
        }

        let curr = 1;
        let currHead = head;

        while (currHead) {
            const next = currHead.next;

            if (curr === index) {
                currHead.next = newNode;
                newNode.prev = currHead;

                newNode.next = next;
                if (next) next.prev = newNode;
                break;
            }

            curr++;
            currHead = next;
        }

        return head;
    };

    reverse = (head) => {
        let prev = null;

        while (head) {
            const next = head.next;

            if (prev === null) {
                head.next = null;
            } else {
                head.next = prev;
                prev.prev = head;
            }

            prev = head;
            head = next;
        }

        return prev;
    };
}

const d = new DoublyLinkedlist();
const head = d.create([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(d.print(head));

const rHead = d.reverse(head);
console.log(d.print(rHead));
