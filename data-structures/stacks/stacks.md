## Stack

### Technical Details
- Abstract data type
- LIFO - Last in, first out
- Push - adds an item as the top item on the stack
- Pop - removes the top item on the stack
- Peek - gets the top item on the stack without popping it
- Ideal backing data structure: linked list

### Time Complexity For Linked List Implementation
- O(1) for push, pop, and peek when using a linked list
- If you use an array, then push is O(N), because the array may have to be resized
- If you know the maximum number of items that will ever be on the stack, array can be a good choice
- If memory is tight, an array might be a good choice
- Linked List is ideal over Arrays
