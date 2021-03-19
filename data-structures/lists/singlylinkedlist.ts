import { IIterable, Consumer, Func } from '../../helpers/Types';
/**
 * singlyLinkedList
 * @class singlyLinkedList
 */

element: any;
 
export interface INode<T> {
    value: T;
    next?: INode<T>;
}
 
class singlyLinkedList<E> {
}