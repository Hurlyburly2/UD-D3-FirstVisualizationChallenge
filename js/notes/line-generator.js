// LINE PATH GENERATOR

let line = d3.line()    // line generator expects an array of data
  .x((data) => { return x(data.year) })  // x = x scale
  .y((data) => { return y(data.value) })  // y = y scale
// each element in the array gets an x and y coordinate  

// ADD LINE TO CHART
g.append('path')      // apends it to 'g' group
  .attr('class', 'line')
  .attr('fill', 'none')
  .attr('stroke', 'grey')
  .attr('stroke-width', '3px')
  .attr('d', line(data))    // browser creates path of coordinates
