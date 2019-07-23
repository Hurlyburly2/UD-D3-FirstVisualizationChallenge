// SVG Group structure the stuff on the page

// use for margins and axis

// generate margins to tweak dimensions of the visualization within the canvas
// groups are invisible containers for structuring svgs
//    -bundle things together to transform them all at once

// declare margin sizes
let margin = {top: 20, right: 10, bottom: 20, left: 10}

// subtract from total width/height to get visualization's width/height
let width = 960 - margin.left - margin.right
let height = 500 - margin.top - margin.top

let group = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  
