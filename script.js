let tijelo = document.querySelector("body");
let header = document.querySelector("header");
let div = document.querySelector("div");
let img = document.querySelector("img");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let button = document.querySelector("button");
let h3 = document.querySelector("h3");
let footer = document.querySelector("footer");
let home1 = document.querySelector("#home1");
let about1 = document.querySelector("#about1");
let course1 = document.querySelector("#course1");
let blog1 = document.querySelector("#blog1");
let contact1 = document.querySelector("#contact1");

console.log(home1.textContent);
console.log(about1.textContent);
console.log(course1.textContent);
console.log(blog1.textContent);
console.log(contact1.textContent);
console.log(h1.textContent);
console.log(h3.textContent);
console.log(p.textContent);
console.log(button.textContent);

let a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
  console.log(a[i].textContent);
}
