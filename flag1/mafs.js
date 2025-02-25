function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}



function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return 0;
  }
}

function square(a) {
  return a * a;
}


module.exports = { add, subtract, multiply, divide, square };
