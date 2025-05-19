// Problem-3.js

function generateOddCountSeries(a) {
  const limit = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 0; i < limit; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

// Example
generateOddCountSeries(6); // Output: 1, 3, 5, 7, 9
