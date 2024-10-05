// function fun(x, fx) {
//   for (let i = 0; i < x; i++) {
//     console.log(i);
//   }
//   fx();
// }

// fun(6, function log() {
//   // this is callback function
//   console.log("constum logger");
// });

// let arr = [1, 2, 3, 4, 5];

// let x = arr.map(function procss(v, i) {
//   console.log(v, i);
//   return v * i;
// });
// console.log(x);
// console.log(arr);


// Custom map function attached to Array.prototype
Array.prototype.customMap = function(fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i));  // Call the callback function `fn`
  }
  return result;
};
let arr = [1, 2, 3, 4, 5, 6];

let output = arr.customMap(function cuber(v, i) {
  console.log(v, v * v * v, i);  // Logs value, its cube, and index
  return v * v * v;  // Returns the cube of the value
});

console.log(output);  // Output: [1, 8, 27, 64, 125, 216]
