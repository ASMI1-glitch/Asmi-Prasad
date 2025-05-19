// Problem-1.js

class Calculator {
  constructor(a, b) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  operate(type) {
    switch (type) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : "Division by zero not allowed";
      default:
        return "Invalid operation";
    }
  }
}

// Example usage:
const calc = new Calculator(10, 5);
console.log("Add:", calc.operate('add'));
console.log("Subtract:", calc.operate('subtract'));
console.log("Multiply:", calc.operate('multiply'));
console.log("Divide:", calc.operate('divide'));
