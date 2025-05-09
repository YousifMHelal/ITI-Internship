const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const find = (arr) => {
  for (i in arr) {
    if (arr[i].start >= 1987) {
      console.log(arr[i].name);
    }
  }
};

// find(companies)

// ----------------------------------------------------------

const show = (arr) => {
  for (i in arr) {
    if (arr[i].category === "Retail") {
      arr[i].start += 1;

      const p = document.createElement("p");

      p.innerText = `Category: ${arr[i].category} - End: ${arr[i].end} - Start: ${arr[i].start}`;

      const Container = document.createElement("div").appendChild(p);
      document.body.appendChild(Container);
    }
  }
};

// show(companies);

// --------------------------------------------------------------

const ascending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i].end > arr[j].end) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
};

// ascending(companies);

// ---------------------------------------------------------------------

const descending = (args) => {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < i; j++) {
      if (args[i] > args[j]) {
        [args[i], args[j]] = [args[j], args[i]];
      }
    }
  }

  // console.log(args.sort((a, b) => b - a));
  // console.log(args.sort().reverse());
  // console.log(args)
};

descending(ages);

// ----------------------------------------------------------------------------

const add = ages.reduce((acc, curr) => acc + curr);

// console.log(add);

// ------------------------------------------------------------------------

const print = (obj) => {
  const { name, category } = obj;
  console.log(`Name: ${name} - Category: ${category}`);
};

// print({ name: "Company ten", category: "Retail" });

// --------------------------------------------------------------------------

const street = () => {
  const { street } = person.address;
  console.log(street);
};

// street();

// ---------------------------------------------------------------------------

const companyName = () => {
  companies.forEach((company) => {
    console.log(company.name);
  });
};

// companyName();

// ----------------------------------------------------------------------

const square = ages.map((num) => num * num);
// console.log(square);

// ----------------------------------------------------------------------
class person1 {
  constructor(name, age) {
    this.n = name;
    this.a = age;
  }

  fun() {
    // console.log(`Name is : ${this.n}`);
    // console.log(`Age is : ${this.a}`);
    // console.log(this.n)
  }
}

let per = new person1("Yousif", 23);
// per.fun();

class stu extends person1 {
  constructor(name, university, faculty, grade) {
    super(name);
    this.uni = university;
    this.fac = faculty;
    this.grad = grade;
  }

  fun() {
    super.fun();
    console.log(`is a student in faculty of ${this.fac} in university ${this.uni}
    And his final grad is ${this.grad}.`);
  }
}

let student = new stu("yousif", "Computer", "Cs", "A");
// student.fun();

// -------------------------------------------------------------------------------
// const URL = "https://dummyjson.com";
// fetch(`${URL}/post/3`)
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// ---------------------------------------------------------------------

let req = new XMLHttpRequest();

req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(req.responseText);
    console.log(data);
  }
};

// req.open("GET", "https://dummyjson.com/product/2", true);
// req.send();
