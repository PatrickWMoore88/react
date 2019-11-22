function add() {
  var total = 0;
  //   var length = process.argv.length;
  for (let i = 2; i < process.argv.length; i++) {
    var num = Number(process.argv[i]);
    total += num;
  }
  return total;
}
console.log(add());
