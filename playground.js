function testNumber() {
  return 10;
}

// console.log(testNumber());

//E6 Array Function
let testNumber1 = () => {
  return 10;
};
// console.log(testNumber1());

//object iteration

var person = {
  name: "javascript",
  library: ["angular", "React", "Vue"],
  printLibrary: function () {
    // Normal array will not give the undefine fro name but fate array function will give the correct name as it is an advantage of fat array
    this.library.forEach((a) => {
      console.log(`${this.name} love ${a}`);
    });
  },
};

person.printLibrary();

//fate array function example in node
const search = document.querySelector(".search");
const result = document.querySelector(".result");
const thankyou = document.querySelector(".thankyou");
