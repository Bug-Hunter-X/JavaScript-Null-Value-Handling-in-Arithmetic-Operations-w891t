function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw an error for null values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3

try {
  console.log(foo(null, 2)); // Throws an error
} catch (e) {
  console.error(e.message); // 'Null values are not allowed'
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (e) {
  console.error(e.message); // 'Null values are not allowed'
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (e) {
  console.error(e.message); // 'Null values are not allowed'
}