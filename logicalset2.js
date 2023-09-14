// 13. Write a program that implements a stack using recursion and provides basic stack operations (push, pop, peek).
// Sample Output:
// Stack: [1, 2, 3]
// Pop: 3
// Peek: 2
// Stack after Pop: [1, 2]

function Stack() {
  this.items = [];

  // Push operation using recursion
  this.push = function (element) {
    this.items = [element, ...this.items];
  };

  // Pop operation using recursion
  this.pop = function () {
    if (this.items.length === 0) {
      console.log("Stack is empty");
      return undefined;
    }
    const popped = this.items[0];
    this.items = this.items.slice(1);
    return popped;
  };
  // Peek operation using recursion
  this.peek = function () {
    if (this.items.length === 0) {
      console.log("Stack is empty");
      return undefined;
    }
    return this.items[0];
  };

  // Display the stack
  this.display = function () {
    console.log("Stack:", this.items);
  };
}
// Create a new stack
const stack = new Stack();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Display the stack
stack.display();

// Pop an element from the stack
console.log("Pop:", stack.pop());

// Peek at the top element
console.log("Peek:", stack.peek());

// Display the stack after pop
stack.display();

// 14. Write a program that converts a time in 12-hour format to 24-hour format.
// Sample Input:   const time12Hour = "03:45 PM";
// Sample Output: Time in 24-Hour Format: "15:45"

const time12Hour = "03:45 PM";
const convertTime = (time12Hour) => {
  const [time, modifier] = time12Hour.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};
console.log(`Time in 24-Hour Format: "${convertTime(time12Hour)}"`);

// 15. Write a program that takes an arbitrary number of arguments and calculates their average using a rest parameter.
// Sample Input:   const avg = (10, 20, 30, 40, 50);
// Sample Output: Average: 30

const calculateAverage = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  return `Average: ${average}`;
};
const avg = calculateAverage(10, 20, 30, 40, 50);
console.log(`${avg}`);

// 16 Write a program that takes an arbitrary number of numbers and calculates their product using a rest parameter.
// Sample Input:  const product = (2, 3, 4, 5);
// Sample Output: Product: 120

const calculateProduct = (...number) => {
  if (number.length === 0) {
    return "No number provided";
  }
  let product = 1;
  for (const numbers of number) {
    product *= numbers;
  }
  return `Product: ${product}`;
};
const result = calculateProduct(2, 3, 4, 5);
console.log(`${result}`);

// 17. Write a program that takes multiple objects and merges them into a single object using the spread syntax.
// Sample Input:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };
// Sample Output:  Merged Object: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
console.log("Merged Object:", { ...obj1, ...obj2, ...obj3 });

// 18. Write a program that takes an object, creates a copy of it, and extends it with new properties using the spread syntax.
// Sample Input:
// const original = { name: "John", age: 30 };
// const extended = { ...original, city: "New York", profession: "Engineer" };
// Sample Output: Extended Object: { name: "John", age: 30, city: "New York", profession: "Engineer" }

const original = { name: "John", age: 30 };
const extended = { ...original, city: "New York", profession: "Engineer" };
console.log("Extended Object:", { ...extended });

// 19. Write a program that validates user input and provides feedback or defaults..
// Sample Input:
// const userInput = "   ";
// Sample Output:
// Processed Input: "No valid input provided."

function processUser(input) {
  input = input.trim();
  if (input === "") {
    return "No valid input provided.";
  }
  return input;
}
const userInput = " ";
const processedInput = processUser(userInput);
console.log(processedInput);

// 20. Write a program that sorts a list of contacts based on their names.
// Sample Input: const contacts = [
//   { name: "Alice", phone: "123-456-7890" },
//   { name: "Bob", phone: "987-654-3210" },
//   { name: "Charlie", phone: "555-123-4567" }
// ];
// Sample Output:
// Sorted Contacts:
// - Alice: 123-456-7890
// - Bob: 987-654-3210
// - Charlie: 555-123-4567
