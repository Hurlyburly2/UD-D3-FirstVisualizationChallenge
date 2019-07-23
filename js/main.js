let margin = {top: 10, right: 10, bottom: 200, left: 100}

let canvasWidth = 600 - margin.left - margin.right
let canvasHeight = 500 - margin.top - margin.bottom


let svg = d3.select("#chart-area").append("svg")
  .attr("width", canvasWidth + margin.left + margin.right)
  .attr("height", canvasHeight + margin.top + margin.bottom)

//shifts the whole group left and down by the left and top margin
let group = svg.append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
  
// X Label
group.append("text")
  .attr("class", "x axis-label")
  .attr("x", canvasWidth / 2)
  .attr("y", canvasHeight + 140)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("The world's tallest buildings")
  
// Y label
group.append("text")
  .attr("class", "y axis-label")
  .attr("x", -(canvasHeight / 2))     // X AND Y ARE REVERSED WHEN WE ROTATE THE OBJECT
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Height (m)")

d3.json("data/buildings.json").then(data => {
  
  data.forEach(building => {
    building.height = parseInt(building.height)
  })
  
  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (building) => { return building.height })])
    .range([canvasHeight, 0])
    
  let x = d3.scaleBand()
    .domain(data.map((building) => { return building.name }))
    .range([0, canvasWidth])
    .paddingInner(0.3)
    .paddingOuter(0.3)
  
  let yAxisCall = d3.axisLeft(y)    // pass in y scale
    .ticks(3)
    .tickFormat((label) => {        // adds 'm' to the labels for meters
      return label + "m"
    })
  group.append("g")
    .attr("class", "y-axis")
    .call(yAxisCall)
  
  let xAxisCall = d3.axisBottom(x)  // pass in x scale
  group.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0, " + canvasHeight + ")")
    .call(xAxisCall)
    .selectAll("text")      //rotate text to prevent overlap
      .attr("y", "10")      // y, x, and text-anchor are used to line up the labels with their tick-marks
      .attr("x", "-5")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-40)")   //rotates -40 degrees
  
  let rectangles = group.selectAll("rect")
    .data(data)
    
  rectangles.enter()
    .append("rect")
      .attr("width", x.bandwidth())
      .attr("height", (building) => {
        return canvasHeight- y(building.height)
      })
      .attr("x", (building, index) => {
        return x(building.name);
      })
      .attr("y", (building) => {
        return y(building.height)
      })
      .attr("fill", "grey")
  
}).catch(error => {
  console.log(error)
})
