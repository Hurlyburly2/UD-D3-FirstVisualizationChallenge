//You may need logarithmic scales instead of linear scales

//For example, when some datapoints are waaaaay out of range of the others, so they're not alone
//off to the side with a whole ton of empty space

//works similarly to a linear scale, except includes a base value in addition to minimum and maximum
//Base value for a linear scale is 1

//Logscale cannot use 0 as a base because of math

let x = d3.scaleLog()
  .domain([300, 150000])
  .range([0, 400])
  .base(10)
  
console.log(x(500))   // 32.9
console.log(x(5000))  // 181.1
console.log(x(50000)) // 329.3

// inverse works the same as inverse of a regular scale log

console.log(x.invert(32.9))   // 500
console.log(x.invert(181.1))  // 5000
console.log(x.invert(329.3))  // 50000
