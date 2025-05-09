const evenOrOdd = () => {
  for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
};

// evenOrOdd();

// --------------------------------------------

const sum = (...args) => {
  let result = 0;
  for (i of args) {
    result += i;
  }
  console.log("The result = " + result);
};

// sum(1, 2, 3);

// -----------------------------------------------

const array = (...args) => {
  let arr = [];
  for (i of args) {
    arr.push(i)
  }
  console.log(arr);
};

// array(1, 2, 3, 8, 5);

// ---------------------------------------------------

var num = 0;

const increment = () => {
  num++;
  console.log(num);
};

// increment()
// increment()

// ----------------------------------------------------------

const sayName = (name) => {
  console.log(`Hello ${name}!`);
};
// sayName('Yousif')

// --------------------------------------------------------------

const sum2 = (num1 = 5, num2 = 7) => {
  console.log(num1 + num2);
};

// sum2(1 , 3)
// sum2(3)
// sum2()

// -----------------------------------------------------------------

const number = (num) => {
  if (num > 0) {
    console.log("positive");
  } else {
    console.log("Negative");
  }
};

// number(5)
// number(-8)

// ---------------------------------------------------------------------

const findMin = (...args) => {
  let min = 1000;
  for (x of args) {
    // console.log(x);
    if (x <= min) {
      min = x;
    }
  }
  console.log(min);
};

// findMin(8, 5, 6, 2, 3);

// ---------------------------------------------------------------------------
const merge = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  console.log(newObj);
};

let obj1 = {
  firstName: "John",
  lastName: "Doe",
  email: "johnydoe1@domain.com",
};

let obj2 = { username: "johnD", phone: "0123456789" };

// merge(obj1, obj2)

// --------------------------------------------------------------------------

const check = (str) => {
  if (/[A-Z]/.test(str)) {
    console.log(str);
  } else {
    console.log("script isn't exist");
  }
};

// check("string");
// ----------------------------------------------------------------------------------
const arr = (arr) => {
  for (i in arr) {
    if (arr[i].category === "Retail") {
      arr[i].category = "lab";
    }
  }
  console.log(arr);
};

let theArr = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
];

// arr(theArr);
// ------------------------------------------------------------------------------//

const multiples = () => {
  for (var i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + " Fizz");
    } else if (i % 5 === 0) {
      console.log(i + " Buzz");
    }
  }
};

multiples();
