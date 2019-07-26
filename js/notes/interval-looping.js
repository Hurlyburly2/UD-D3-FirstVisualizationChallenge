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
