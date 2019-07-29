// To add tooltips:

// 1. 
tip = d3.tip()                        // Call d3 tip function (instantiates tooltip element)
  .attr('class', 'd3-tip')            // add "d3-tip" class for styling
  .html((data) => { return data })    // set contents of tooltip using html method (passes the function a piece of data)

// 2.
vis.call(tip)     // adds the tip to our visualization area

// 3. 
vis.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', x.rangeBand())
  .attr('height' h - y(d))
  .attr('y', y(d))
  .attr('x', (data, index) => { return x(i) })
  .on('mouseover', tip.show)      // listens for mouseover to show tooltip
  .on('mouseout', tip.hide)       //  listens for mouseout to hide tooltip
  
.on() // ATTACHES EVENTS TO SVGS. Args: event type to listen for, function to execute
// event types: click, mouseover, mouseout, mousemove, etc
// tip.show/tip.hide are methods given by d3-tip library

// d3 tip library also comes with example css

// NEED TO DOWNLOAD D3 TIP LIBRARY FROM GITHUB REPOSITORY
