// require("./xyz.js"); // one module into another
// const obj = require("./sum.js");  // or u can access through like this const {sum}= require("./sum.js");

import { cal } from "./sum.js";

var name = "Deva";

let a = 10;
let b = 20;

cal(a, b);

console.log(name);

// console.log(a + b);
// console.log(global);
// console.log(window)
