# JavaScript Null Value Handling in Arithmetic Operations

This repository demonstrates a common error in JavaScript related to handling null values in arithmetic operations.  The `bug.js` file contains a function that attempts to add two numbers, but it simply returns 0 if either input is null. This behavior might be unexpected or insufficient in certain situations.

The `bugSolution.js` provides an alternative implementation that uses a more robust approach to deal with null values, either by throwing an error or providing a different default result.  This showcases best practices for error management and handling unexpected inputs in JavaScript functions.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and examine the `foo` function.
3. Run `node bug.js` to see the current behavior.
4. Open `bugSolution.js` to view a possible improved implementation.