//Use an interval loop to update

d3.interval(() => {
  //code goes here
}, 500) //runs every 500 ms

//  stop the loop
let myInterval = setInterval(() => {
  //code goes here
}, 500)

// Stop the loop
clearInterval(myInterval)

// Use interval to update dynamically. Decide which parts of code are updated when we make changes and which are updated when we run it once

// Update function called from interval loop
  // Scales/Axes need to change in case our data changes
  // If scales/axes change, then we need to update size/position of rectangles
  
// D3 update pattern

// d3 creates three elements: enter, exit, and groups

// enter -> all of the elements in our data array that don't exist on the page (yet)
  // shapes that need to be ADDED to the screen
  
// exit -> all of the elements on the page that don't exist in our data array
  // shapes that need to be REMOVED from the screen

// groups -> all of the elements that CURRENTLY exist on the screen


// Use the same update pattern whenever things change: ************************************

// DATA JOIN
// Join new data with old elements (if any)

let text = g.selectAll("text")    //grabs the svgs on the screen
  .data(data)       // update with the data we're using
  
// EXIT
//Remove old elements as needed
text.exit().remove()      // exit selector removes the elements that don't exist in our new array of data

// UPDATE
// Update old elements as needed
text.attr("class", "update")  // set attributes for existing elements on the screen
  .attr("fill", "red")
  
// ENTER
// Create new elements as needed
text.enter().append("text")       //use the enter selector to set attributes for new items in our data array
  .attr("class", "enter")
  .attr("x", ((d, i) => { return i * 32 }))
  .attr("y", 20)
  .attr("fill", "green")
  .text(() => { return d; })
  
  
  
// TRANSITIONS   ****************************************************************************************
// Attributes added BEFORE transition are applied right away
// Attributes added AFTER transition are applied gradually

rects.enter().append("rect")
  .attr("height", ((data) => { return height - y(data.revenue )}))
  .attr("x", ((data) => { return x(data.month) }))
  .attr("width", x.bandwidth)
  .attr("fill", "grey")
  .attr("y", y(0))
  .attr("fill-opacity", 0)
  .transition(d3.transition().duration(500))          // Add transition to the objects when you create them (duration = length of transition)
    .attr("y", ((data) => { return y(d[value]) }))    // Y at bottom of screen -> shape height
    .attr("fill-opacity", 1)                          // opacity fades from 0->1 (invisible to solid)

let transition = d3.transition().duration(500)        // you can define a transition as a variable!
