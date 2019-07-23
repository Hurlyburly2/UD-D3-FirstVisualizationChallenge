let canvasWidth = 400
let canvasHeight = 400

let svg = d3.select("#chart-area").append("svg")
  .attr("width", canvasWidth)
  .attr("height", canvasHeight)

d3.json("data/buildings.json").then(data => {
  
  let tallestBuilding = 0
  data.forEach(building => {
    building.height = parseInt(building.height)
    if (building.height > tallestBuilding) {
      tallestBuilding = building.height
    }
  })
  
  let y = d3.scaleLinear()
    .domain([0, tallestBuilding])
    .range([0, canvasHeight])
  
  let rectangles = svg.selectAll("rect")
    .data(data)
    
  rectangles.enter()
    .append("rect")
      .attr("width", 40)
      .attr("height", (building) => {
        return y(building.height)
      })
      .attr("x", (building, index) => {
        return index * 50;
      })
      .attr("y", 10)
      .attr("fill", "grey")
  
}).catch(error => {
  console.log(error)
})
