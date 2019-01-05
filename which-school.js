function whichSchool(age) {
  //if age is below 13
  if (age < 13) {
    //return Elementary School
    return("Elementary School");
  //else if age is between 13 and 18 (inclusive)
  } else if (age > 12 && age < 19) {
    //return Secondary School
    return("Secondary School");
  //else
  } else {
    //return Lighthouse Labs
    return("Lighthouse Labs");
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));