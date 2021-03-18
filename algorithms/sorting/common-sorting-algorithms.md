# Sorting Algorithms 

## Bubble Sort Algorithm

### Implementation Steps
- Simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order
- Keep looping through until they are in order, then one last that checks that they are now sorted

### Technical Details
- In-place algorithm
- O(N^2) time complexity - quadratic
- It will take 100 steps to sort 10 items, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
- Algorithm degrades quickly


## Selection Sort Algorithm

### Implementation Steps
- Sorts an array by repeatedly finding the minimum element(considering ascending order) from unsorted part and putting it at the begnning
- 2 subarrays are created
    1. The subarray which is already sorted
    2. Remaining subarray which is unsorted
- In each iteration of selection sort, the minimum element(considering ascending order) from the unsorted subarray is picked and moved to the sorted sub array

### Technical Details
- In-place algorithm
- O(N^2) time complexity - quadratic
- It will take 100 steps to sort 10 items, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
- Doesn't require as much swapping as bubble sort
- Unstable algorithm


## Insertion Sort Algorithm

### Implementation Steps
1. Iterate from arr[1] to arr[N] over the array
2. Compare the current element (key) to its predecessor
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements on position up to make space for the swapped element

### Technical Details
- In-place algorithm
- O(N^2) time complexity - quadratic
- It will take 100 steps to sort 10 items, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
- Stable Algorithm


## Shell Sort Algorithm

### Implementation Steps
1. Iterate from arr[1] to arr[N] over the array
2. Compare the current element (key) to its predecessor
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements on position up to make space for the swapped element

### Technical Details
- Variation of Insertion Sort
- Insertion sort chooses which element to insert using a gap of 1
- Shell sort starts out using a larger gap value
- As the algorithms runs, the gap is reduced
- Goal is to reduce the amount of shifting required
- In-place Algorithm
- Difficult to nail down the time complexity because it will depend on the gap. Worst case: O(N^2), but it can perform much better than that
- Doesn't require as much shifting as the insertion sort, so it usually performs better
- Unstable Algorithm
 
[Shell Sort Link](https://en.wikipedia.org/wiki/Shellsort)
 
### Knuth Sequence
| k | Gap (interval) |
| ----------- | ----------- |
| 1 | 1 |
| 2 | 4 |
| 3 | 13 |
| 4 | 40 |
| 5 | 121 |


## Merge Sort Algorithm

### Implementation Steps
- Divide and conquer algorithm
- Recursive Algorithm
- Two phases: splitting and merging

    ### Splitting Phase
    - Start with an unsorted array
    - Divide the array into 2 arrays, which are unsorted. The first array is the left array, and the second array is the right array. 
    - Split the left and right arrays into two arrays each
    - Keep splitting until all the arrays have only one element each - these arrays are sorted

    ### Merging Phase
    - Merge every left/right pair of sibling arrays into a sorted array
    - After the first image, we'll have a bunch of 2-element sorted arrays
    - Then merge those sorted arrays(left/right siblings) to end up with a bunch of 4-element sorted arrays
    - Repeat until you have a single sorted array
    - Not in-place. Uses temporary arrays

- Splitting phase leads to faster sorting during the merging phase
- Splitting is logical. We do not create new arrays

###Technical Details
