//create 3 functions to calculate the areas of 3 different shapes: rectangels, triangles & circles
//if the parameters are negative, the function should return "undefined"

//function to calculate the area of rectangles
function calculateRectangleArea(length, width) {
  //check that the parameters are positve
  //if either parameter is negative
  if (length < 0 || width < 0){
    //return undefined
    return(undefined);
  } else {
    //caluclate rectangle: length × width
    var rectangleArea = length * width;
    //return area
    return(rectangleArea);
  }
}

//function to calculate the area of triangles
function calculateTriangleArea(base, height) {
  //check that the parameters are positve
  //if either parameter is negative
  if (base < 0 || height < 0){
    //return undefined
    return(undefined);
  } else {
    //calculate triangle: base × height / 2
    var triangleArea = base * height / 2;
    //return area
    return(triangleArea);
  }
}

//function to calculate the area of circles
function calculateCircleArea(radius) {
  //check that the parameters are positve
  //if either parameter is negative
  if (radius < 0){
    //return undefined
    return(undefined);
  } else {
    //calculate circle: π × radius squared
    var circleArea = Math.PI * (radius * radius)
    //return area
    return(circleArea);
  }
}


//code to evaluate area functions

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined