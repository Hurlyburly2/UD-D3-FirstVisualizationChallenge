// Create a lot of common visualizations with much less work

// Take in data and add new fields to each item in our data array
// Use these new fields to draw our visualizations (pass generated values straight into svgs or path generator)

// V3             ->     V4
  d3.layout.pie()     d3.pie()
  d3.layout.force()   d3.force()
  d3.layout.stack()   d3.stack()
  d3.layout.treemap() d3.treemap()
  d3.layout.cloud()   d3.layout.cloud()      // word clouds. syntax did not change because it is community-made
  
  
data    ->    pie(data)         // adds values for use in a pie chart (eg. startAngle, endAngle, ect)
                                // these values get passed into a path generator to create pie chart
                                // figuring out these values on our own would've been tedious
                                

data    ->   treemap(data)      // does the same for tree maps (depth, parent, ect.)
  // data must be formatted in a hierarchy
  // append rectangle for each piece of data at the coordinates provided by the treemap method
