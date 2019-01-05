//Define a function range which takes 3 integer parameters: start, end, and step.
function range(start, end, step) {

  //if given incorrect parameters, such as:
  //start, end, or step being undefined
  //start being greater than end
  //step being negative
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    //The function should return an empty array []
    return([]);

  //else the function should return an array of numbers from start to end counting by step.
  } else {
    //create blank array
    var arrayRange = [];
    //for loop to run parameters through
    for (start; start <= end; start += step) {
      //Hint: at some point in your code, you may want to use some_array.push(some_value) - push values into array
      arrayRange.push(start);
    }
    //return array
    return(arrayRange);
  }
}


//test code
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

