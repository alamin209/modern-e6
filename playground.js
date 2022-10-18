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
    // Normal array will not give the undefine for name but fat array function will give the correct name as it is an advantage of fat array
    this.library.forEach((a) => {
      console.log(`${this.name} love ${a}`);
    });
  },
};

person.printLibrary();

//fate array function example in node
const search = document.querySelector(".search");
const display = document.querySelector(".result");
const thankyou = document.querySelector(".thankyou");

function show() {
  display.innerHTML = this.value;

  // normal function
  // var self = this;
  // setTimeout(
  //   function () {
  //     thankyou.innerHTML = `you press ${self.value}`;
  //   },

  //   1000
  // );

  ///Array function no need to declared again self
  setInterval(() => {
    thankyou.innerHTML = `you press ${this.value}`;
  }, 100);
}
search.addEventListener("keyup", show);
