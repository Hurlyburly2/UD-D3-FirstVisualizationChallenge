// d3 axis generators - show scale of chart
// d3 labels generators - add labels to show what things represent

// four different axis generators (one for each side)
// they are generated at origin point, so you can attach to a group and translate to move around
// eg. you must shift right axis by the width of your canvas, and your bottom axis by the height

let leftAxis = d3.axisLeft("Y-SCALE")
g.append("g")
  .attr("class", "left axis")
  .tickSize("VALUE")
  .call(leftAxis)
    
let bottomAxis = d3.axisBottom("X-SCALE")
g.append("g")
  .attr("class", "bottom axis")
  .attr("transform", "translate(0," + height + ")")
  .call(bottomAxis)
    
let topAxis = d3.axisTop("X-SCALE")
g.append("g")
  .attr("class", "top axis")
  .call(topAxis)
    
let rightAxis = d3.axisRight("Y-SCALE")
g.append("g")
  .attr("class", "right axis")
  .attr("transform", "translate(" + width + ", 0)")
  .call(rightAxis)
    
// TICK SIZING (add with other attributes and stuff)

.tickSizeOuter("VALUE")   // Affects only the tick outside the chart
.tickSizeInner("VALUE")   // Affects only the tick inside the chart
.tickSize("VALUE")        // Affects the whole tick

.ticks(10)    // How many ticks will show up on an axis

.tickFormat(d3.format((datum) => {    // Formatting tick text
  return "TICK TEXT"
}))

.tickValues([1, 2, 3, 5, 8, 13, 21])   // Pick exact ticks
