//Linear Scales

//create a scale
//domain and range take in two values: minimum and maxmimum values for each
//convention: name the scale after the axis you're scaling (eg. y & x)

var y = d3.scaleLinear()
  .domain([0, 828])   
  .range([0, 400])    

//this stores it as a usable function that takes one argument- the input we want to scale

console.log(y(100))   //48.3
console.log(y(414))   //200
console.log(y(700))   //338.2

// scale.invert will take in the 'scaled' value and return the value you'd need the data to be to reach that value

console.log(y.invert(48.3)) //100
console.log(y.invert(200))  //414
console.log(y.invert(338.2))  //700
