let canvasWidth = 400
let canvasHeight = 400

let svg = d3.select("#chart-area").append("svg")
  .attr("width", canvasWidth)
  .attr("height", canvasHeight)

d3.json("data/buildings.json").then(data => {
  
  data.forEach(building => {
    building.height = parseInt(building.height)
  })
  
  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (building) => { return building.height })])
    .range([0, canvasHeight])
    
  let x = d3.scaleBand()
    .domain(data.map((building) => { return building.name }))
    .range([0, 400])
    .paddingInner(0.4)
    .paddingOuter(0.2)
  
  let rectangles = svg.selectAll("rect")
    .data(data)
    
  rectangles.enter()
    .append("rect")
      .attr("width", x.bandwidth())
      .attr("height", (building) => {
        return y(building.height)
      })
      .attr("x", (building, index) => {
        return x(building.name);
      })
      .attr("y", 10)
      .attr("fill", "grey")
  
}).catch(error => {
  console.log(error)
})
