// Problem-2.js

function generateSeries(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

// Example
generateSeries(4);  // Output: 1, 3, 5, 7
