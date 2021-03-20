/* ============================================================
  Interfaces for Node (Inner Class) & SinglyLinkedList
============================================================ */
type nodeType<T> = node<T> | null;

interface INode<T> {
    _element: T;
    _next: nodeType<T>;
    element: T;
    next: nodeType<T>;
}

interface ISinglyLinkedList<T> {
    _head: nodeType<T>;
    _tail: nodeType<T>;
    _size: number;
    size: number;
    isEmpty: boolean;
    first: nodeType<T>;
    last: nodeType<T>;
}


/* ============================================================
  Classes for Node (Inner Class) & SinglyLinkedList
============================================================ */
/**
 * node
 * @class node
 */
class node<T> implements INode<T> {
    // Instance Variables
    _element: T;
    _next: nodeType<T>;

    // Constructor
    constructor(element:T) {
        this._element = element;
        this._next = null;
    }

    // Getter Methods 
    get element():T {
        return this._element;
    }

    get next(): nodeType<T> {
        return this._next;
    }
        
    // Setter Method
    set next(n: nodeType<T>) {
        this._next = n;
    }  
};

/**
 * singlyLinkedList
 * @class singlyLinkedList
 */
class singlyLinkedList<T> {
    // Instance Variables
    private head:nodeType<T> = null;
    private tail:nodeType<T> = null;
    private _size: number = 0;

    // Constructor
    constructor() {}
    
    // Getter Methods
    get size():number {
        return this._size;
    }
 
    isEmpty():boolean { 
        return (this._size == 0);
    } 

    first(): nodeType<T> {
        if(this.isEmpty()) { return null; }
        return this.head?.element();
    }

    last(): nodeType<T> {
        if(this.isEmpty()) { return null; }
        return this.head?.element();
    }

    // Setter Methods

}

 