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
  
