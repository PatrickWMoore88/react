function myFunction(firstName, lastName, someFunction, someOtherFunction) {
  console.log(firstName);
  console.log(lastName);
  someFunction();
  someOtherFunction("I am working!");
}

myFunction(
  "Patrick",
  "Moore",
  function() {
    console.log("This is a function");
  },
  function(arg1) {
    console.log("This is the arg1= " + arg1);
  }
);
