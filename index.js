function add (a, b) {
    return a + b;
  }
  add = add(1, 80);
  console.log(add);
  
  function subtract (a, b) {
    return a - b;
  }
  subtract = subtract(60, 40);
  console.log(subtract);
  
  function multiply (a, b) {
    return a * b;
  }
  multiply = multiply(2, 3.4);
  return(multiply);
  
  function divide(a, b){
    return a / b;
  }
  divide = divide(5.0, 2.5);
  return(divide);

  function increment(n) {
    return ++n;
  }
  increment = increment(5);
  console.log(increment);
  
  function decrement (n) {
    return --n;
  }
  decrement = decrement(5);
  console.log(decrement);

  function makeInt(n) {
    return parseInt(n, 10);
  }
  console.log(makeInt('0x2328'));
  
  function makeInt(n) {
    return parseInt(n, 10);
  }
  console.log(makeInt('sldkjflksjf'));

  function preserveDecimal(n) {
    return parseFloat(n, 10);
  }
  console.log (preserveDecimal('2.222'));
  
  function preserveDecimal(n) {
    return parseFloat(n,10);
  }
  console.log (preserveDecimal('sldkjflksjf'));