let margin = {top: 10, right: 10, bottom: 100, left: 100}

let canvasWidth = 600 - margin.left - margin.right
let canvasHeight = 400 - margin.top - margin.bottom


let svg = d3.select("#chart-area").append("svg")
  .attr("width", canvasWidth + margin.left + margin.right)
  .attr("height", canvasHeight + margin.top + margin.bottom)

//shifts the whole group left and down by the left and top margin
let group = svg.append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")

d3.json("data/buildings.json").then(data => {
  
  data.forEach(building => {
    building.height = parseInt(building.height)
  })
  
  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (building) => { return building.height })])
    .range([0, canvasHeight])
    
  let x = d3.scaleBand()
    .domain(data.map((building) => { return building.name }))
    .range([0, canvasWidth])
    .paddingInner(0.3)
    .paddingOuter(0.3)
  
  let rectangles = group.selectAll("rect")
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
