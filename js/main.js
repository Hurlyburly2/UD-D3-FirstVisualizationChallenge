d3.json("data/buildings.json").then(data => {
  
  data.forEach(building => {
    building.height = parseInt(building.height)
  })
  
  let svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 500)
  
  let rectangles = svg.selectAll("rect")
    .data(data)
    
  rectangles.enter()
    .append("rect")
      .attr("width", 40)
      .attr("height", (building) => {
        return building.height
      })
      .attr("x", (building, index) => {
        return index * 50;
      })
      .attr("y", 10)
      .attr("fill", "grey")
  
}).catch(error => {
  console.log(error)
})
