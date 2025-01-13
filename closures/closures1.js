function outerFunction() {
  let outerVariable = "I'm from outer scope!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();
