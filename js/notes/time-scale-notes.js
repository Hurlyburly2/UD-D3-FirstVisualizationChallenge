// Time scales are linear scales in D3, but they use JavaScript date objects

// set min date and max date
// d3 scales the date to the size you've specified for the area

var x = d3.scaleTime()
  .domain([new Date(2000, 0, 1),
    new Date(2001, 0, 1)])
  .range([0, 400])
  
// ^maps does from 2000-2001 to a 0-400 range

console.log(x(new Date(2000, 7, 1)))  // 199
console.log(x(new Date(2000, 2, 1)))  // 66.5
console.log(x(new Date(2000, 10, 25)))  // 360

console.log(x.invert(232.8))  // Tue Aug 01 2000
console.log(x.invert(66.5))   // Wed Mar 01 2000
console.log(x.invert(360))    // Sun Nov 25 2000
