class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    };
};

class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    };

    prepend(value) {
        let nextNode = null;
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            this.headNode.nextNode = nextNode;
            this.length++;
            return;
        };
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
        this.length++;
    };

    append(value) {
        let nextNode = null;
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            this.headNode.nextNode = nextNode;
        } else {
            let pointer = this.headNode;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            };
            pointer.nextNode = newNode;
        };
        this.length++;
    };

    size() {
        return this.length;
    };

    head() {
        return this.headNode;
    };

    tail() {
        let pointer = this.headNode;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        };
        return pointer;
    };

    at(index) {
        let pointer = this.headNode;
        for (let i = 0; i < index; i++) {
          pointer = pointer.nextNode;
        };
        return pointer;
    };

    pop() {
        if (this.headNode.nextNode === null) {
            headNode = null;
            this.length--;
          } else {
            this.at(this.size() - 2).nextNode = null;
            this.length--;
          };
    };

    contains(value) {
        let node = this.headNode;
        let index = 0;
        while (node.newNode !== null) {
            if (node.value === value) return true;
            node = node.nextNode;
            index++;        
            return false;
        };
    };

    find(value) {
        let node = this.headNode;
        let index = 0;
        while (node.newNode !== null) {
            if (node.value === value) return index;
            node = node.nextNode;
            index++;        
            return null;
        };
    };

    toString() {
        let pointer = this.headNode;
        let result = "";

        while (pointer.nextNode !== null) {
          result = result.concat(`(${pointer.value}) --> `);
          pointer = pointer.nextNode;
        };

        result = result.concat(`(${pointer.value})`);
        console.log(result);
        return result;
    };
};

const newList = new LinkedList();
newList.prepend(1);
newList.append(5);
newList.append(10);
console.log(newList.toString());

// node app.js