function custummapp(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i);
    result.push(res);
  }
  return result;
}

arr = [1, 2, 3, 4, 5, 6];

let x = arr.custummapp(arr, function cuber(v, i) {
  console.log(v, v * v * v, i);
  return v * v * v;
});
console.log(x, arr);
