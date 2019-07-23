// ORDINAL (color) scales

// associate categories with colors

// domain = strings of categories
// range = strings of color names

// if you add more to the domain, it uses the next value in range
// if you add more items to the domain than there are in the range, it loops back and starts using the ones at the beginning

// D3 COMES WITH SOME DEFAULT COLOR SCALES
// https://github.com/d3/d3-scale-chromatic

var color = d3.scaleOrdinal()
  .domain(["AFRICA", "N. AMERICA", "EUROPE", "S. AMERICA", "ASIA", "AUSTRALIA"])
  .range(["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "GREY"])
  //can also use default color scale here: .range(d3.schemeCategory10)
  
console.log(color("AFRICA"))  // RED
