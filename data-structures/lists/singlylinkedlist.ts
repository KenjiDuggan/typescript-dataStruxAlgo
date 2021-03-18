/**
 * singlyLinkedList
 * @class singlyLinkedList
 */

class node {
    value: number;
    next: node | null;

    constructor (value:number) {
        this.value = value;
        this.next = null
    }
}


class singlyLinkedList {
    name : string;
    price : number;

    constructor(...p: Array<any>) {
        this.name = p[0];
        this.price = p[1];
    }
}
