
function scope() {
  let x = 10;
  function scope2() {
    let x2 = 20;
  }
  console.log(x2);
  scope2();
}
scope();
console.log(x);
