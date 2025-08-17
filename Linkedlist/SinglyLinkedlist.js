class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class SinglyLinkedlist {
    create = (arr) => {
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

    print = (head) => {
        let ll = '';

        while (head) {
            ll += `${head.val} => `;
            head = head.next;
        }

        ll += 'null';

        return ll;
    };

    length = (head) => {
        let l = 0;

        while (head) {
            head = head.next;
            l++;
        }

        return l;
    };

    linearSearch = (head, key) => {
        let index = 0;

        while (head) {
            if (head.val === key) return index;

            head = head.next;
            index++;
        }

        return -1;
    };

    delete = (head, index) => {
        if (index === 0) return head.next;

        let curr = 1;
        let currHead = head;

        while (currHead && currHead.next) {
            if (index === curr) {
                currHead.next = currHead.next.next;
                break;
            }

            currHead = currHead.next;
            curr++;
        }

        return head;
    };

    insert = (head, index, val) => {
        const newNode = new Node(val);

        if (index === 0) {
            newNode.next = head;
            return newNode; // new head
        }

        let curr = 1;
        let currHead = head;

        while (currHead) {
            const next = currHead.next;

            if (curr === index) {
                currHead.next = newNode;
                newNode.next = next;
                break;
            }

            currHead = next;
            curr++;
        }

        return head;
    };

    reverse = (head) => {
        let prev = null;

        while (head) {
            const next = head.next;
            head.next = prev;

            prev = head;
            head = next;
        }

        return prev;
    };
}
