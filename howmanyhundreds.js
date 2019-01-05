//pass a number through a function that returns
//how many hundreds fit into that number

function howManyHundreds(num) {
  //pass var num through modulo to determine what the remainder is

  // if num / 100 has a remainder, subtract the remainder from num and return num/100
  if (num % 100 !== 0) {
    num = num - (num % 100);
    return num / 100;
  } else {
    // else return num /100
    return num / 100;

  }

}

//test code to verify

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);